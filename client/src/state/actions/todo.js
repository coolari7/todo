import { TYPES } from "state/types";

export const editTodo = (todo) => ({
  type: TYPES.TODO.EDIT,
  payload: todo,
});
