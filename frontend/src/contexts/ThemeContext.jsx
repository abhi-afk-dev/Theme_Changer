import React, { createContext, useState, useEffect } from 'react';

// 1. Define and export ThemeContext
// It will provide the current theme name and a function to update it.
const ThemeContext = createContext(null);

// Define available themes as an array of objects
// Each object has a 'name' (for CSS class) and 'displayName' (for UI display)
const THEMES = [
  { name: 'light', displayName: 'Light' },
  { name: 'dark', displayName: 'Dark' },
  { name: 'solarized', displayName: 'Solarized' },
  { name: 'nord', displayName: 'Nord' },
];

// 2. Create and export ThemeProvider component
const ThemeProvider = ({ children }) => {
  // Manage the current theme state. Default to 'light'.
  const [themeName, setThemeName] = useState('light');

  // Effect to load the initial theme from localStorage on component mount.
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    // Check if storedTheme exists and is one of the valid themes
    if (storedTheme && THEMES.some(theme => theme.name === storedTheme)) {
      setThemeName(storedTheme);
    } // If no valid stored theme, 'light' remains the default via useState initialization.
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
    // Only set the theme if the newTheme is a valid one from our THEMES list
    if (THEMES.some(theme => theme.name === newTheme)) {
      setThemeName(newTheme);
    } else {
      console.warn(`Attempted to set an invalid theme: ${newTheme}. Available themes: ${THEMES.map(t => t.name).join(', ')}`);
    }
  };

  // The value provided to consumers of this context.
  const contextValue = {
    themeName,
    setTheme,
    themes: THEMES, // Expose the list of available themes to context consumers
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
