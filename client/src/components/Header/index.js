import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme";
import { history } from "../history";

export function Header() {
  const [path, setPath] = React.useState(history.location.pathname);
  const [theme, setTheme] = useTheme();

  React.useEffect(() => {
    let unlisten = history.listen(({ pathname }) => setPath(pathname));
    return () => {
      unlisten();
    };
  }, [path]);

  const onThemeToggle = (e) => setTheme(e.target.checked ? "dark" : "light");

  const getLabelText = () => (theme === "light" ? "Light Theme" : "Dark Theme");

  const themedStyles = React.useMemo(
    () => ({
      menu: theme === "dark" ? "ui inverted pointing menu" : "ui pointing menu",
      span: {
        color: theme === "dark" ? "white" : "initial",
      },
    }),
    [theme]
  );

  return (
    <div className={themedStyles.menu}>
      <Link className={`item ${path === "/" ? "active" : ""}`} to="/">
        Home
      </Link>
      <Link
        className={`item ${path === "/todos/new" ? "active" : ""}`}
        to="/todos/new"
      >
        Create Todo
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui toggle checkbox">
            <input type="checkbox" name="theme" onChange={onThemeToggle} />
            <label htmlFor="theme">
              <span style={themedStyles.span}>{getLabelText()}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
