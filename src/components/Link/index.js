import React from "react";
import { Link } from "gatsby";

export default ({ to, children, ...props }) => {
  console.log({ to });
  if (to && to.startsWith("http")) {
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link {...props}>{children}</Link>;
};
