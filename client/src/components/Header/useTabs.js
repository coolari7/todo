import React from "react";
import { useHistory } from "react-router-dom";

export function useTabs() {
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);

  React.useEffect(() => {
    let unlisten = history.listen(({ pathname }) => setPath(pathname));
    return () => {
      unlisten();
    };
  }, [path, history]);

  return path;
}
