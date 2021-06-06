import React from "react";

export function Spacer({ children, margin = "10px" }) {
  return <div style={{ margin }}>{children ? children : null}</div>;
}
