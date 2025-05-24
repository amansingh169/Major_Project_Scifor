import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const availableThemes = ["light", "ash", "dark", "onyx", "neon", "fire"];

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const defaultTheme = availableThemes.includes(savedTheme) ? savedTheme : "light";
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
