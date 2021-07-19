import React from "react";
import { AppRouter } from "components/AppRouter";
import { TodoProvider } from "state/context/todo";

export const App = () => {
  return (
    <TodoProvider>
      <AppRouter />
    </TodoProvider>
  );
};
