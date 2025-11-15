import React, { createContext, useState, useEffect } from 'react';

// 1. Define and export ThemeContext
// It will provide the current theme name and a function to update it.
const ThemeContext = createContext(null);

// 2. Create and export ThemeProvider component
const ThemeProvider = ({ children }) => {
  // Manage the current theme state. Default to 'light'.
  const [themeName, setThemeName] = useState('light');

  // Effect to load the initial theme from localStorage on component mount.
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setThemeName(storedTheme);
    } // If no stored theme, 'light' remains the default via useState initialization.
  }, []); // Empty dependency array means this effect runs once after the initial render.

  // Effect to save the theme to localStorage and apply CSS class whenever it changes.
  useEffect(() => {
    // Remove any existing theme classes to ensure only one is active.
    document.documentElement.classList.forEach(className => {
      if (className.startsWith('theme-')) {
        document.documentElement.classList.remove(className);
      }
    });

    // Add the current theme class to the document's root element (<html>).
    document.documentElement.classList.add(`theme-${themeName}`);

    // Save the current theme to localStorage.
    localStorage.setItem('theme', themeName);
  }, [themeName]); // Re-run this effect whenever themeName changes.

  // Function to update the theme, to be exposed via context.
  const setTheme = (newTheme) => {
    setThemeName(newTheme);
  };

  // The value provided to consumers of this context.
  const contextValue = {
    themeName,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
