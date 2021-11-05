import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "components/Header";
import { TodoProvider } from "state/context/todo";
import { AppSwitch } from "./AppSwitch";
import { ListProvider } from "state/context/lists";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <ListProvider>
        <TodoProvider>
          <AppSwitch />
        </TodoProvider>
      </ListProvider>
    </BrowserRouter>
  );
}
