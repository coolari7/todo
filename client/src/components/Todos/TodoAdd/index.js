import React from "react";
import { history } from "../../history";
import { useStore } from "../../../context";
import { addTodo } from "../../../context/todo";
import { createTodo } from "../../../context/todo";
import { TodoForm } from "../TodoForm";

export function TodoAdd() {
  const [, dispatch] = useStore();

  const onClickAdd = (title, description) => {
    dispatch(addTodo(createTodo(title, description)));
    history.push("/");
  }

  return <TodoForm onSubmit={onClickAdd} header="Add Todo" buttonText="Add" />;
}
