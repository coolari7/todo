import React from "react";
import { todoReducer, INITIAL_STATE } from "state/reducers/todo";

const TodoContext = React.createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, INITIAL_STATE);

  const provider = React.useMemo(() => [state, dispatch], [state]);

  return (
    <TodoContext.Provider value={provider}>{children}</TodoContext.Provider>
  );
}

export function useTodo() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error("Cannot use 'useTodo' outside of TodoProvider!");
  }
  return context;
}
