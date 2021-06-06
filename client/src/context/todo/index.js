import { TODO } from "./types";

export const createTodo = (
  title = "",
  description = "",
  id = Date.now(),
  createdOn = new Date(),
  isComplete = false
) => ({
  id,
  title,
  description,
  createdOn,
  isComplete,
});


export const addTodo = (todo) => ({
  type: TODO.ADD,
  payload: todo,
});

export const editTodo = (todo) => ({
  type: TODO.EDIT,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: TODO.REMOVE,
  paylaod: id,
});

export const fetchTodo = (todo) => ({
  type: TODO.GET,
  payload: todo,
});

export const fetchAllTodos = (todos) => ({
  type: TODO.GET_ALL,
  payload: todos,
})
