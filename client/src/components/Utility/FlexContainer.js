import React from "react";

export function FlexContainer({
  children,
  justifyContent = "center",
  alignItems = "center",
  style = {},
}) {
  return (
    <div style={{ display: "flex", justifyContent, alignItems, ...style }}>
      {children}
    </div>
  );
}
