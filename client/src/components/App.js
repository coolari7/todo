import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const App = () => {
  return (
    <main className="sm:p-10">
      <TodoList />
      <div className="p-4"></div>
      <TodoForm />
    </main>
  );
};
