import { TYPES } from "state/types";

export const INITIAL_STATE = {};

export const listsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LIST.EDIT:
    case TYPES.LIST.ADD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case TYPES.LIST.DELETE:
      return Object.keys(state).reduce(
        (total, id) => ({
          ...total,
          ...(id !== action.payload && {
            [id]: state[id],
          }),
        }),
        {}
      );
    default:
      return state;
  }
};
