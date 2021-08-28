import React from "react";
import { todoReducer, INITIAL_STATE } from "state/reducers/todo";

const TodoContext = React.createContext();

export function TodoProvider({ children, initial = INITIAL_STATE }) {
  const [state, dispatch] = React.useReducer(todoReducer, initial);

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
