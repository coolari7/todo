import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { StoreProvider } from "./context";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.querySelector("#root")
);
