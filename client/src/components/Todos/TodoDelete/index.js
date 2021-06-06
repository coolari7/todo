import React from "react";
import { useStore } from "../../../context";
import { removeTodo } from "../../../context/todo";

export function TodoDelete({ todo, onDismiss }) {
  const [, dispatch] = useStore("todos");

  const onClickDelete = () => {
    dispatch(removeTodo(todo.id));
    onDismiss();
  };

  return (
    <React.Fragment>
      <div className="inverted header">Delete Todo</div>
      <div className="content">Are you sure you want to delete this todo?</div>
      <div className="actions">
        <button onClick={onClickDelete} className="ui button negative">
          Delete
        </button>
        <button onClick={onDismiss} className="ui button">
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
}
