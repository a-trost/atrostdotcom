import React from "react";
import { Link } from "gatsby";

export default ({ to, children, ...props }) => {
  if (to && to.startsWith("http")) {
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (to)
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  return <div {...props}>{children}</div>;
};
