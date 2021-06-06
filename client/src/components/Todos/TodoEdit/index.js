import React from "react";
import { Redirect } from "react-router-dom";
import { history } from "../../history";
import { useStore } from "../../../context";
import { editTodo } from "../../../context/todo";
import { TodoForm } from "../TodoForm";

export function TodoEdit({ match }) {
  const [todos, dispatch] = useStore("todos");
  const { id } = match.params;

  if (!todos[id]) {
    return <Redirect to="/" />
  }

  const onClickSave = (title, description) => {
    dispatch(editTodo({ ...todos[id], title, description }));
    history.push("/");
  };

  return (
    <TodoForm
      onSubmit={onClickSave}
      todo={todos[id]}
      header="Edit Todo"
      buttonText="Save"
    />
  );
}
