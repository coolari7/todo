import { TYPES } from "state/types";

export const INITIAL_STATE = {};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.TODO.EDIT:
    case TYPES.TODO.ADD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
