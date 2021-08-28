import React from "react";
import ReactDOM from "react-dom";

export function Portal({ children, ...props }) {
  return ReactDOM.createPortal(
    <div className="fixed z-10 inset-0" {...props}>
      {children}
    </div>,
    document.querySelector("#modal")
  );
}
