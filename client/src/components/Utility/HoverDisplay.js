import React, { memo } from "react";
import "components/Utility/common.css";

function __HoverDisplay({ children, style = {} }) {
  return (
    <div style={style} className="hover-display">
      {children}
    </div>
  );
}

export const HoverDisplay = memo(__HoverDisplay);
