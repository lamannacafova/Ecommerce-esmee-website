import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("DarkMode") ? JSON.parse(localStorage.getItem("DarkMode")) : false
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <GlobalThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
