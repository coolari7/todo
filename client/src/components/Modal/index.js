import React from "react";
import ReactDOM from "react-dom";

export function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">{children}</div>
    </div>,
    document.querySelector("#modal")
  );
}
