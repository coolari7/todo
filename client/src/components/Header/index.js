import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Checkbox, Image } from "semantic-ui-react";
import { useAuth } from "context/auth";
import { useTheme } from "context/theme";

export function Header() {
  let history = useHistory();
  const [authState] = useAuth();
  const [theme, setTheme] = useTheme();
  const [path, setPath] = React.useState(history.location.pathname);

  React.useEffect(() => {
    let unlisten = history.listen(({ pathname }) => setPath(pathname));
    return () => {
      unlisten();
    };
  }, [path, history]);

  const onThemeToggle = (e, { checked }) =>
    setTheme(checked ? "dark" : "light");

  return (
    <Menu pointing inverted={theme === "dark"}>
      <Menu.Item as={Link} to="/" active={path === "/"}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/todos/new" active={path === "/todos/new"}>
        Create Todo
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Checkbox toggle onChange={onThemeToggle} />
        </Menu.Item>
        <Menu.Item>
          <Image avatar size="mini" src={authState.user.imageURL} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
