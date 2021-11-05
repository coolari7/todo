import React from "react";
import { Avatar } from "components/common/Avatar";
import { Bar } from "components/common/Icons/Bar";
import { Menu } from "components/common/Menu";
import { Tabs } from "./Tabs";
import { useTabs } from "./useTabs";

export function Header() {
  const path = useTabs();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex h-12 sm:h-14 justify-between px-4 shadow-md text-sm">
      <section className="block sm:hidden my-auto">
        <Bar onClick={() => setOpen(!open)} className="cursor-pointer" />
      </section>
      <section className="hidden sm:block">
        <Tabs path={path} />
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
