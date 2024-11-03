import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useUserStore } from "../../store/userStore";

const Welcome = () => {
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const setName = useUserStore((state) => state.setName);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim().length < 2) {
      setError("Please enter a valid name (at least 2 characters)");
      return;
    }
    setName(nameInput.trim());
    navigate('/home');
  };

  return (
    <div className="page-container min-h-screen">
      <div className="card flex flex-col h-full">
        {/* Main content area */}
        <div className="flex-1">
          <div className="flex flex-col items-center justify-start space-y-6 text-center">
            <div className="content-slide-up" style={{ animationDelay: "0.1s" }}>
              <h1>Welcome to Extension</h1>
              <p className="text-gray-600">
                Enhance your browsing experience
              </p>
            </div>

            <div 
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full content-slide-up"
              style={{ animationDelay: "0.2s" }}
            />

            <div className="content-slide-up w-full max-w-xs" style={{ animationDelay: "0.3s" }}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value);
                    setError("");
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your name"
                />
                {error && (
                  <p className="text-red-500 text-xs">{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6"
        onClick={handleSubmit}>
          <Link
            to="/"
            className="gradient-button w-full text-white flex items-center justify-center space-x-2 group"
          >
            <span>Back to Welcome</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;