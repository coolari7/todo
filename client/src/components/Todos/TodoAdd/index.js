import React from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "context";
import { addTodo } from "context/todo";
import { createTodo } from "context/todo";
import { TodoForm } from "components/Todos/TodoForm";

export function TodoAdd() {
  const history = useHistory();
  const [, dispatch] = useStore();

  const onClickAdd = (title, description) => {
    dispatch(addTodo(createTodo(title, description)));
    history.push("/");
  };

  return <TodoForm onSubmit={onClickAdd} header="Add Todo" buttonText="Add" />;
}
