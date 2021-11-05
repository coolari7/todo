import { TYPES } from "state/types";
import { v4 as uuid } from "uuid";

const createList = (title, description) => ({
  id: uuid(),
  title,
  description,
  isComplete: false,
});

export const addList = (title, description) => ({
  type: TYPES.LIST.ADD,
  payload: createList(title, description),
});

export const editList = (list) => ({
  type: TYPES.LIST.EDIT,
  payload: list,
});

export const deleteList = (list) => ({
  type: TYPES.LIST.DELETE,
  payload: list.id,
});
