import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "semantic-ui-react";

export function PortalModal({ children }) {
  return ReactDOM.createPortal(
    <Modal open>{children}</Modal>,
    document.querySelector("#modal")
  );
}
