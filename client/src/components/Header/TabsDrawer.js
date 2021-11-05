import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES_DATA } from "config/router-data";
import { useDrawer, Drawer } from "components/Lists/Drawer";

export function TabsDrawer({ path }) {
  const history = useHistory();
  // const { close } = useDrawer();

  // React.useEffect(() => {
  //   let unlisten = history.listen(() => {
  //     console.log("Changed!");
  //     close();
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, [history, close]);

  const renderLinks = ROUTES_DATA.map(({ name, href }) => {
    console.log(name, href);
    return (
      <Drawer.Close
        // to={href}
        key={href}
        onClick={() => {
          console.log("href", href);
          history.push(href);
        }}
        className={`navlink ${path === href ? "active" : ""}`}
      >
        {name}
      </Drawer.Close>
    );
  });

  return (
    <div className="text-sm p-2 sm:pb-0 h-full flex flex-col sm:flex-row gap-3 sm:gap-6 font-semibold">
      {renderLinks}
    </div>
  );
}
