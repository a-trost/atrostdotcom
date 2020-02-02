import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Breadcrumbs from "./breadcrumbs";

import Layout from "./layout";

export default ({
  breadcrumbs = [],
  data: {
    note: { body },
    site: {
      siteMetadata: { title },
    },
  },
  ...props
}) => (
  <Layout {...props} title={title}>
    {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
);
