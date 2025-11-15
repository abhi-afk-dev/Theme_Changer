import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Screen from "./pages/screen";
import './App.css';
import { ThemeContext } from './contexts/ThemeContext.jsx';

function App() {
  const { themeName, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app-container ${themeName}`}>
      <header className="p-4 bg-surface-color text-primary-text-color border-b border-border-color flex justify-between items-center">
        <h1 className="text-2xl font-bold bungee-text">My Themed App</h1>
        <div className="flex space-x-2">
          <button onClick={() => handleThemeChange('light')} className="px-4 py-2 rounded-md transition-colors duration-300">
            Light
          </button>
          <button onClick={() => handleThemeChange('dark')} className="px-4 py-2 rounded-md transition-colors duration-300">
            Dark
          </button>
        </div>
      </header>
      <main className="flex-grow p-4 bg-background-color text-primary-text-color">
        <Routes>
          <Route path="/" element={<Screen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
