import React from "react";
import { TodoForm } from "components/Todos/TodoForm";
import { useHistory } from "react-router";
import { addTodo } from "state/actions/todo";
import { useTodo } from "state/context/todo";

export function TodoAdd() {
  const history = useHistory();
  const [, dispatch] = useTodo();

  const onSubmit = (title, description) => {
    dispatch(addTodo(title, description));
    history.push("/");
  };

  return <TodoForm onSubmit={onSubmit} buttonText="Add" />;
}
