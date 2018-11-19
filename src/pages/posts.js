import React from "react";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Layout from "../components/Layout";

const PostContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  justify-items: stretch;
  margin-bottom: 40px;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const IndexPage = ({ data, location, history, match }) => (
  <Layout location={location} history={history} match={match}>
    <div>
      <h1>Recent Articles</h1>
      <PostContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
      </PostContainer>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query BlogData {
    site {
      siteMetadata {
        title
        desc
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            image
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;