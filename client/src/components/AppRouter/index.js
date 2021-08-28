import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "components/Header";
import { TodoProvider } from "state/context/todo";
import { AppSwitch } from "./AppSwitch";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <TodoProvider>
        <AppSwitch />
      </TodoProvider>
    </BrowserRouter>
  );
}
