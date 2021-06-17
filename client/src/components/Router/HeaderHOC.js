import React from "react";
import { Header } from "components/Header";

export function HeaderHOC({ children, ...rest }) {
  return (
    <React.Fragment>
      <Header />
      {React.cloneElement(children, rest)}
    </React.Fragment>
  );
}
