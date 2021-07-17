import React from "react";

export function renderChildren(children, props) {
  return React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, props) : child
  );
}
