import React from "react";
import { Checkbox, Segment } from "semantic-ui-react";
import { LabelText } from "components/common/LabelText";

export const Todo = ({ todo, onToggle }) => {
  return (
    <Segment role="article">
      <Checkbox
        id={todo.id}
        role="checkbox"
        aria-checked={todo.isComplete}
        checked={todo.isComplete}
        onChange={onToggle}
        label={<LabelText todo={todo} />}
      />
    </Segment>
  );
};
