import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Layout from "../components/Layout";

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  justify-items: stretch;
  margin-bottom: 40px;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const IndexPage = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Recent Articles",
      desc:
        "Articles by Alex Trost on web design, programming, React, Gatsby, and more.",
    }}
  >
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
            image {
              childImageSharp {
                fluid(maxWidth: 800, traceSVG: { color: "rgb(43, 129, 200)" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            desc
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
