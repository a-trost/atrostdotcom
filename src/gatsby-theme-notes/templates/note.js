import React from "react";
import { graphql } from "gatsby";

import Note from "../components/note";
import SEO from "../../components/SEO";

export default ({ pageContext: { breadcrumbs }, ...props }) => (
  <>
    <SEO />
  <Note breadcrumbs={breadcrumbs} {...props} />
  </>
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
