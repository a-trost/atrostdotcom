import React from "react";
import { Link } from "gatsby";

export default (props) => {
  if (props.to.startsWith("http")) {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
  return <Link {...props}>{props.children}</Link>;
};
