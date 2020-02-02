import React from "react";
import { graphql } from "gatsby";

import Note from "../components/note";

export default ({ pageContext: { breadcrumbs }, ...props }) => (
  <Note breadcrumbs={breadcrumbs} {...props} />
);

export const pageQuery = graphql`
  query($id: String!, $title: String) {
    note: mdx(id: { eq: $id }) {
      id
      body
    }
    image: ogImage {
      src(text: $title)
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
