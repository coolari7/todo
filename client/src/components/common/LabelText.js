import React from "react";

export const LabelText = React.memo((props) => {
  return (
    <span
      data-testid="checkbox-label"
      className={`label ${props.todo.isComplete ? "line-through" : ""}`}
    >
      {props.todo.title}
    </span>
  );
});
