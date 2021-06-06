import React from "react";
import { Link } from "react-router-dom";
import { history } from "../history";

export function Header() {
  const [path, setPath] = React.useState(history.location.pathname);

  React.useEffect(() => {
    let unlisten = history.listen(({ pathname }) => setPath(pathname));
    return () => {
      unlisten();
    };
  }, [path]);

  return (
    <div className="ui secondary pointing menu">
      <Link className={`item ${path === "/" ? "active" : ""}`} to="/">
        Home
      </Link>
      <Link
        className={`item ${path === "/todos/new" ? "active" : ""}`}
        to="/todos/new"
      >
        Create Todo
      </Link>
    </div>
  );
}
