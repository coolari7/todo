import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { App } from "./components/App";
import { StoreProvider } from "./context";
import { AuthProvider } from "./context/auth";
import { ThemeProvider } from "./context/theme";

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </AuthProvider>,
  document.querySelector("#root")
);
