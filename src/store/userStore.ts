import { create } from 'zustand';
import { persist, createJSONStorage, type PersistOptions } from 'zustand/middleware';

interface UserState {
  name: string;
  setName: (name: string) => void;
}

type UserStorePersist = Pick<UserState, 'name'>;

// Create a custom storage object that uses chrome.storage.local
const chromeStorage = createJSONStorage<UserStorePersist>(() => ({
  getItem: async (key: string): Promise<string | null> => {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage?.local) {
        chrome.storage.local.get([key], (result) => {
          try {
            // Add encryption/decryption here if needed
            const value = result[key] ? btoa(result[key]) : null;
            resolve(value);
          } catch {
            resolve(null);
          }
        });
      } else {
        resolve(null);
      }
    });
  },
  
  setItem: async (key: string, value: string): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage?.local) {
        // Add encryption/decryption here if needed
        const encryptedValue = atob(value);
        chrome.storage.local.set({ [key]: encryptedValue }, () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  },
  
  removeItem: async (key: string): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage?.local) {
        chrome.storage.local.remove(key, () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}));

const persistOptions: PersistOptions<UserState, UserStorePersist> = {
  name: 'user-storage',
  storage: chromeStorage,
  partialize: (state) => ({
    name: state.name
  }),
  version: 1,
  onRehydrateStorage: () => (state) => {
    if (state) {
      console.log('Storage rehydrated:', state);
    }
  },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: '',
      setName: (name: string) => set({ name }),
    }),
    persistOptions
  )
);

// Helper function to manually get the stored name (if needed)
export const getStoredName = async (): Promise<string | null> => {
  if (typeof chrome !== 'undefined' && chrome.storage?.local) {
    return new Promise((resolve) => {
      chrome.storage.local.get(['user-storage'], (result) => {
        try {
          if (result['user-storage']) {
            const data = JSON.parse(atob(result['user-storage']));
            resolve(data.state.name);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    });
  }
  return null;
};