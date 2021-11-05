import React from "react";
import { INITIAL_STATE, listsReducer } from "state/reducers/lists";

const ListContext = React.createContext({});

export function ListProvider({ children, initial = INITIAL_STATE }) {
  const [state, dispatch] = React.useReducer(listsReducer, initial);

  const provider = React.useMemo(() => [state, dispatch], [state]);

  return (
    <ListContext.Provider value={provider}>{children}</ListContext.Provider>
  );
}

export function useList() {
  const context = React.useContext(ListContext);
  if (!context) {
    throw new Error("Cannot use 'useList' outside of TodoProvider!");
  }
  return context;
}
