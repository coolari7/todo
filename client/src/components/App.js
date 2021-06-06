import React from "react";
import { StoreProvider } from "../context";
import { ThemeProvider } from "../context/theme";
import { AppRouter } from "./Router";

export const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </ThemeProvider>
  );
};
