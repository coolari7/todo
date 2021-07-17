import React from "react";
import { Redirect, useHistory } from "react-router";
import { useTodo } from "state/context/todo";
import { TodoForm } from "components/Todos/TodoForm";
import { editTodo } from "state/actions/todo";

export function TodoEdit({ match, ...props }) {
  const history = useHistory();
  const [todos, dispatch] = useTodo();
  const { id } = match.params;

  if (!todos[id]) {
    return <Redirect to="/" />;
  }

  const onFormSubmit = (title, description) => {
    dispatch(editTodo({ ...todos[id], title, description }));
    history.push("/");
  };

  return (
    <TodoForm buttonText="Save" onSubmit={onFormSubmit} todo={todos[id]} />
  );
}
