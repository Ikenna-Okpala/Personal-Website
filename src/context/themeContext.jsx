import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  flipTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");

    if (saveTheme) {
      setTheme(saveTheme);
    }
  }, []);

  const flipTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    /**
     * set new objects
     */
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const value = { theme, flipTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
