import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

export default ({ files }) => (
  <ul css={{ padding: 0 }}>
    {files.map(url => {
      const fileName = url.split("/").slice(-1)[0];
      return (
        <li key={url}>
          <Styled.a as={Link} to={url}>
            {fileName}
          </Styled.a>
        </li>
      );
    })}
  </ul>
);
