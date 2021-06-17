import React, { memo } from "react";

function __FlexContainer({
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

export const FlexContainer = memo(__FlexContainer);
