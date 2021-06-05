import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

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

const IndexPage = ({ data, location, history }) => {
  console.log({ data });
  return (
    <Layout
      location={location}
      history={history}
      pageData={{
        title: "Recent Articles",
        desc: "Articles by Alex Trost on web design, programming, React, Gatsby, and more.",
      }}
    >
      <SEO />
      <div>
        <h1>Recent Articles</h1>
        <PostContainer>
          {data.allMdx.edges.map(({ node }) => (
            <PostListing key={node.id} post={node} />
          ))}
        </PostContainer>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogData {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            date
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  tracedSVGOptions: { color: "rgb(43, 129, 200)" }
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
              }
            }
            desc
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
