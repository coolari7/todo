import React from "react";
import { v4 as uuid } from "uuid";
import { Todo } from "components/Todo";

export const App = () => {
  const [todo, setTodo] = React.useState({
    id: uuid(),
    isComplete: false,
    title: "Testing Todo",
  });

  const onToggle = () => {
    setTodo({ title: todo.title, isComplete: !todo.isComplete });
  };

  return <Todo todo={todo} onToggle={onToggle} />;
};
