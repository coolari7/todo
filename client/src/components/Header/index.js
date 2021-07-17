import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "components/common/Avatar";
import { Bar } from "components/common/Icons/Bar";
import { ROUTES_DATA } from "config/router-data";
import { Menu } from "components/common/Menu";

export function Header() {
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);

  React.useEffect(() => {
    let unlisten = history.listen(({ pathname }) => setPath(pathname));
    return () => {
      unlisten();
    };
  }, [path, history]);

  const renderLinks = ROUTES_DATA.map(({ name, href }) => (
    <Link
      key={href}
      to={href}
      className={`navlink ${path === href ? "active" : ""}`}
    >
      {name}
    </Link>
  ));

  return (
    <nav className="flex h-12 sm:h-14 justify-between px-4 shadow-md text-sm">
      <section className="block sm:hidden my-auto">
        <Bar className="cursor-pointer" />
      </section>
      <section className="hidden sm:flex gap-6 font-semibold">
        {renderLinks}
      </section>
      <section className="my-auto">
        <Menu className="relative">
          <Menu.Button>
            <Avatar />
          </Menu.Button>
          <Menu.Items className="dropdown w-40">
            <Menu.Item>
              <button className="dropdown-item">Sign Out</button>
            </Menu.Item>
            <Menu.Item>
              <button className="dropdown-item">My Profile</button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </section>
    </nav>
  );
}
