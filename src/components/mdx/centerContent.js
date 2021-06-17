import React from "react";

export default function CenterContent({
  maxWidth = "400px",
  children,
  ...props
}) {
  return (
    <div style={{ maxWidth: maxWidth, margin: "1rem auto" }} {...props}>
      {children}
    </div>
  );
}
