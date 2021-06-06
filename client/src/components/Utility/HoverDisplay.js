import React from "react";
import "./common.css";

export function HoverDisplay({ children, style = {} }) {
  return (
    <div style={style} className="hover-display">
      {children}
    </div>
  );
}
