import React from "react";
import { useStore } from "../../../context";
import { editTodo } from "../../../context/todo";
import { NoTodos } from "../../Custom/NoTodos";
import { Todo } from "../Todo";

export function TodoShow() {
  const [todos, dispatch] = useStore("todos");

  const onToggle = (todo) =>
    dispatch(editTodo({ ...todo, isComplete: !todo.isComplete }));

  const renderTodos = () =>
    Object.keys(todos).map((id) => (
      <Todo key={id} todo={todos[id]} onToggle={onToggle} />
    ));

  const render = () => {
    return Object.keys(todos).length < 1 ? <NoTodos /> : renderTodos();
  };

  return <React.Fragment>{render()}</React.Fragment>;
}
