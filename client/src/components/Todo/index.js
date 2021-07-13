import { LabelText } from "components/common/LabelText";
import React from "react";

export const Todo = ({ todo, onToggle }) => {
  // return (
  //   <Segment role="article">
  //     <Checkbox
  //       id={todo.id}
  //       role="checkbox"
  //       aria-checked={todo.isComplete}
  //       checked={todo.isComplete}
  //       onChange={onToggle}
  //       label={<LabelText todo={todo} />}
  //     />
  //   </Segment>
  // );

  return (
    <li className="flex shadow-md bg-white list-none p-2 rounded-full">
      <label className="inline-flex items-center ml-2">
        <input
          aria-checked={todo.isComplete}
          type="checkbox"
          name="todo"
          checked={todo.isComplete}
          onChange={onToggle}
          className="mr-4 rounded-full h-5 w-5"
        />
        <LabelText todo={todo} />
      </label>
    </li>
  );
};
