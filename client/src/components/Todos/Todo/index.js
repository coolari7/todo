import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Icon, Segment } from "semantic-ui-react";
import { useTheme } from "context/theme";
import { FlexContainer } from "components/Utility/FlexContainer";
import { HoverDisplay } from "components/Utility/HoverDisplay";

export function Todo({ todo, onToggle, onClickDelete }) {
  const [theme] = useTheme();

  const themedStyles = React.useMemo(
    () => ({
      segment: theme === "dark" ? "ui inverted segment" : "ui segment",
      color: {
        color: theme === "dark" ? "white" : "initial",
      },
      icon: (icon) =>
        theme === "dark" ? `icon white ${icon}` : `icon grey ${icon}`,
    }),
    [theme]
  );

  return (
    <Segment inverted={theme === "dark"}>
      <FlexContainer justifyContent="space-between">
        <Checkbox
          checked={todo.isComplete}
          onChange={() => onToggle(todo)}
          label={{
            children: (
              <span style={themedStyles.color}>
                {todo.isComplete ? <s>{todo.title}</s> : todo.title}
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
