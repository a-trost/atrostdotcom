import React from "react";
import Link from "gatsby-link";
import PostListing from "../components/Posts/PostListing";

const IndexPage = ({ data }) => (
  <React.Fragment>
  <div>
    <h2>Recent Articles</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
  </React.Fragment>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
