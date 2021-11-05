import React from "react";
import { Link } from "react-router-dom";
import { ROUTES_DATA } from "config/router-data";

export function Tabs({ path }) {
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
    <div className="text-sm p-2 sm:pb-0 h-full flex flex-col sm:flex-row gap-3 sm:gap-6 font-semibold">
      {renderLinks}
    </div>
  );
}
