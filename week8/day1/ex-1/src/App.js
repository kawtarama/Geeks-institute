import React, { createContext, useContext, useState } from "react";
import "./App.css";

// 1. Créer le contexte
const ThemeContext = createContext();

// 2. Composant Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// 3. Composant pour changer le thème
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Passer en mode {theme === "light" ? "sombre" : "clair"}
    </button>
  );
};

// 4. Composant qui applique le thème
const ThemedContent = () => {
  const { theme } = useContext(ThemeContext);
  return <h1>Thème actuel : {theme}</h1>;
};

// 5. App principale
function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;
