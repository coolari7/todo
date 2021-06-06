import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/theme";
import { FlexContainer } from "../../Utility/FlexContainer";
import { HoverDisplay } from "../../Utility/HoverDisplay";

export function Todo({ todo, onToggle, onClickDelete }) {
  const [theme] = useTheme();

  const themedStyles = React.useMemo(
    () => ({
      segment: theme === "dark" ? "ui inverted segment" : "ui segment",
      color: {
        color: theme === "dark" ? "white !important" : "initial",
      },
      icon: (icon) =>
        theme === "dark" ? `icon white ${icon}` : `icon grey ${icon}`,
    }),
    [theme]
  );

  return (
    <div className={themedStyles.segment}>
      <FlexContainer justifyContent="space-between">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="isComplete"
            checked={todo.isComplete}
            onChange={() => onToggle(todo)}
          />
          <label>
            <span style={themedStyles.color}>
              {todo.isComplete ? (
                <s>{todo.title}</s>
              ) : (
                <span>{todo.title}</span>
              )}
            </span>
          </label>
        </div>
        <HoverDisplay style={{ flexGrow: 1, textAlign: "right" }}>
          <Link to={`/todos/edit/${todo.id}`} className={themedStyles.color}>
            <i className="icon white edit"></i>
          </Link>
          <i
            onClick={() => onClickDelete(todo)}
            className={themedStyles.icon("trash alternate")}
          ></i>
        </HoverDisplay>
      </FlexContainer>
    </div>
  );
}
