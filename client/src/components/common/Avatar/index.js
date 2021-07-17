import React from "react";

export function Avatar(props) {
  return (
    <img
      className="rounded-full h-10 cursor-pointer hover:shadow-md"
      src="/assets/images/person.png"
      alt="avatar"
      {...props}
    />
  );
}
