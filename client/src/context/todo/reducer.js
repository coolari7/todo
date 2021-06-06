import { TODO } from "./types";

export function todoReducer(state, action) {
  switch (action.type) {
    case TODO.ADD:
    case TODO.GET:
    case TODO.EDIT:
      return { ...state, [action.payload.id]: action.payload };
    case TODO.REMOVE:
      return Object.keys(state).reduce(
        (total, id) => ({
          ...total,
          ...(action.payload !== Number(id) && { [id]: state[id] }),
        }),
        {}
      );
    case TODO.GET_ALL:
      return action.payload.reduce(
        (total, todo) => ({
          ...total,
          [todo.id]: todo,
        }),
        { ...state }
      );
    default:
      return state;
  }
}
