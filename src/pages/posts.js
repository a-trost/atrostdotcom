import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import ContentList from "@components/ContentList";

const PostContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  margin-top: 40px;
  justify-items: stretch;
  margin-bottom: 40px;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .switch-group {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
  }

  .switch-label {
    margin-right: 0.8em;
    font-size: 0.9em;
    color: #666;
    cursor: pointer;
  }

  .switch {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    height: 1.5em;
    border-radius: 16px;
    width: 2.75em;
    transition: background-color 300ms, box-shadow 300ms;
    border: none;
    cursor: pointer;
    background-color: #ccc;
    &.on {
      background-color: #1384b8;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #18baffcc;
    }
  }

  .thumb {
    display: inline-block;
    margin: 0;
    width: 1em;
    height: 1em;
    background: white;
    border-radius: 50%;
    transition: transform 300ms;
    &.on {
      transform: translateX(1.5em);
    }
    &.off {
      transform: translateX(0.25em);
    }
  }
`;

const IndexPage = ({ data, location, history }) => {
  const allPosts = data.allMdx.edges;

  return (
    <Layout
      location={location}
      history={history}
      pageData={{
        title: "Articles",
        desc: "Articles by Alex Trost on web design, programming, React, Gatsby, and more.",
      }}
    >
      <SEO
        pageData={{
          title: "Articles",
          desc: "Articles by Alex Trost on web design, programming, React, Gatsby, and more.",
        }}
      />
      <ContentList content={allPosts} pageTitle="Articles" />
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
            draft
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
          excerpt(pruneLength: 220)
        }
      }
    }
  }
`;
