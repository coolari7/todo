import { LabelText } from "components/common/LabelText";
import React from "react";

export function Todo({ todo, onToggle }) {
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
    <li className="flex sm:shadow-md bg-white p-2 rounded-full">
      <label className="inline-flex items-center ml-2">
        <input
          name="todo"
          type="checkbox"
          onChange={() => onToggle(todo)}
          checked={todo.isComplete}
          aria-checked={todo.isComplete}
          className="mr-4 rounded-full h-5 w-5"
        />
        <LabelText todo={todo} />
      </label>
    </li>
  );
}
