import { TYPES } from "state/types";

export const INITIAL_STATE = {
  1234: {
    id: 1234,
    isComplete: true,
    title: "Test Todo 1",
    description: "Test Description 1",
  },
  5678: {
    id: 5678,
    isComplete: false,
    title: "Test Todo 2",
    description: "Test Description 2",
  },
};

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
