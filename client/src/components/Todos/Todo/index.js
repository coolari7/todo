import React from "react";
import { Link } from "react-router-dom";
import { FlexContainer } from "../../Utility/FlexContainer";
import { HoverDisplay } from "../../Utility/HoverDisplay";

export function Todo({ todo, onToggle }) {
  return (
    <div className="ui segment">
      <FlexContainer justifyContent="space-between">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="isComplete"
            checked={todo.isComplete}
            onChange={() => onToggle(todo)}
          />
          <label>
            {todo.isComplete ? <s>{todo.title}</s> : <span>{todo.title}</span>}
          </label>
        </div>
        <HoverDisplay style={{ flexGrow: 1, textAlign: "right" }}>
          <Link to={`/todos/edit/${todo.id}`}>
            <i className="icon grey edit"></i>
          </Link>
          <i className="icon grey trash alternate"></i>
        </HoverDisplay>
      </FlexContainer>
    </div>
  );
}
