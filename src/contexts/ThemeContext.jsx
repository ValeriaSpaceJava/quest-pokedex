import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const lightTheme = {
  background: "#fff",
  text: "#000"
};

const darkTheme = {
  background: "#000",
  text: "#fff"
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledProvider theme={currentTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
