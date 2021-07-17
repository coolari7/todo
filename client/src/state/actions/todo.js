import { TYPES } from "state/types";
import { v4 as uuid } from "uuid";

const createTodo = (title, description) => ({
  id: uuid(),
  title,
  description,
  isComplete: false,
});

export const addTodo = (title, description) => ({
  type: TYPES.TODO.ADD,
  payload: createTodo(title, description),
});

export const editTodo = (todo) => ({
  type: TYPES.TODO.EDIT,
  payload: todo,
});
