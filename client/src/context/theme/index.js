import React from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  const themeUtils = React.useMemo(() => [theme, setTheme], [theme]);

  return (
    <ThemeContext.Provider value={themeUtils}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme cannot be used outside of ThemeProvider");
  }
  return context;
}
