import React from "react";
import { v4 as uuid } from "uuid";
import { TodoForm } from "components/TodoForm";
import { Todo } from "components/Todo";

export const App = () => {
  const [todo, setTodo] = React.useState({
    id: uuid(),
    isComplete: true,
    title: "Testing Todo",
  });

  const onToggle = (e) => {
    setTodo({ title: todo.title, isComplete: !todo.isComplete });
  };

  return (
    <main className="max-w-6xl m-auto p-10 bg-gray-50">
      <Todo todo={todo} onToggle={onToggle} />
      <div className="p-6"></div>
      <TodoForm />
    </main>
  );
};
