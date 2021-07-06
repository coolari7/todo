import React from "react";

export const LabelText = React.memo((props) => {
  return (
    <label
      data-testid="checkbox-label"
      htmlFor={props.todo.id}
      style={{
        textDecoration: props.todo.isComplete ? "line-through" : "initial",
      }}
    >
      {props.todo.title}
    </label>
  );
});
