import React from "react";
import { Todo } from "components/Todo";
import { editTodo } from "state/actions/todo";
import { TodoProvider, useTodo } from "state/context/todo";

function PrivateTodoList() {
  const [todos, dispatch] = useTodo();

  const onToggle = (todo) => {
    dispatch(editTodo({ ...todo, isComplete: !todo.isComplete }));
  };

  const mapTodos = Object.values(todos).map((todo) => (
    <Todo key={todo.id} todo={todo} onToggle={onToggle} />
  ));

  return (
    <ul className="grid grid-cols-1 gap-4 list-none p-4 sm:shadow-md bg-blue-50">
      {mapTodos}
    </ul>
  );
}

export function TodoList() {
  return (
    <TodoProvider>
      <PrivateTodoList />
    </TodoProvider>
  );
}
