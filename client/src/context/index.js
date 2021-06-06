import React from "react";
import { combineReducer } from "./combineReducers";
import { todoReducer } from "./todo/reducer";

const StoreContext = React.createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    combineReducer({
      todos: todoReducer,
    }),
    {
      todos: {},
    }
  );

  const store = React.useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStore(item) {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("Cannot use 'useStore' outside of StoreProvider!");
  }
  const [ state, dispatch ] = context;
  if (item && state[item]) {
    return [state[item], dispatch];
  }
  return [state, dispatch];
}
