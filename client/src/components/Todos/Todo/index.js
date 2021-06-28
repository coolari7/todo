import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Icon, Segment } from "semantic-ui-react";
import { useTheme } from "context/theme";
import { FlexContainer } from "components/Utility/FlexContainer";
import { HoverDisplay } from "components/Utility/HoverDisplay";

export function Todo({ todo, onToggle, onClickDelete }) {
  const [theme] = useTheme();

  return (
    <Segment inverted={theme === "dark"}>
      <FlexContainer justifyContent="space-between">
        <Checkbox
          checked={todo.isComplete}
          onChange={() => onToggle(todo)}
          label={{
            children: (
              <span
                style={{
                  color: theme === "dark" ? "white" : "initial",
                  ...(todo.isComplete && { textDecoration: "line-through" }),
                }}
              >
                {todo.title}
              </span>
            ),
          }}
        />
        <HoverDisplay style={{ flexGrow: 1, textAlign: "right" }}>
          <Link to={`/todos/edit/${todo.id}`}>
            <Icon name="edit" inverted={theme === "dark"} />
          </Link>
          <Icon
            inverted={theme === "dark"}
            onClick={() => onClickDelete(todo)}
            name="trash alternate"
          />
        </HoverDisplay>
      </FlexContainer>
    </Segment>
  );
}
