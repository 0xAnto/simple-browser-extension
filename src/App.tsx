import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="w-full h-full bg-white">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
