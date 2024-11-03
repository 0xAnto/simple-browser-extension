# Simple Browser Extension

A clean and modern browser extension with a personalized dashboard.

## Features

- 🎨 Modern UI with smooth animations
- 👤 Personalized dashboard
- 🔒 Secure name storage
- 📊 Feature cards for quick access
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 📦 Zustand for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/0xAnto/simple-browser-extension.git
```

2. Navigate to the project directory
```bash
cd simple-browser-extension
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

### Loading the Extension in Chrome

1. Build the project
```bash
npm run build
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `build` directory from your project folder

5. The extension should now be installed and ready to use

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Zustand
- Vite
- Lucide Icons

## Project Structure

```
simple-browser-extension/
├── src/
│   ├── components/
│   ├── store/
│   │   └── userStore.ts
│   ├── pages/
│   │   ├── Welcome.tsx
│   │   └── Home.tsx
│   └── App.tsx
├── public/
├── manifest.json
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[0xAnto](https://x.com/0xanto)

## Support

If you have any questions or need help, please open an issue in the repository.