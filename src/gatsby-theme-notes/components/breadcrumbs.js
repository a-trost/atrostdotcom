import React from "react";
import { Link } from "gatsby";
import { css } from "theme-ui";

import useOptions from "gatsby-theme-notes/src/use-options";
import BreadcrumbDivider from "gatsby-theme-notes/src/components/breadcrumb-divider";

export default ({ links }) => {
  const { basePath = `/`, breadcrumbSeparator } = useOptions();

  return (
    <nav
      css={css({
        mb: 3,
        "& a": {
          textDecoration: `none`,
          fontWeight: `bold`,
        },
      })}
    >
      <Link to={basePath}>Notes</Link>
      {links.map(link => (
        <>
          <BreadcrumbDivider text={breadcrumbSeparator} />
          <Link to={link.url} key={link.url}>
            {link.name}
          </Link>
        </>
      ))}
    </nav>
  );
};
