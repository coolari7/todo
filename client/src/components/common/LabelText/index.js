import React from "react";

export const LabelText = (props) => {
  return (
    <span className={`label ${props.todo.isComplete ? "line-through" : ""}`}>
      {props.todo.title}
    </span>
  );
};
