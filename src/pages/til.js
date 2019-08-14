import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import TILCard from "../components/TILCard";

const TilContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;
  .til-card + .til-card {
    margin-top: 2rem;
  }
`;

const IndexPage = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Today I Learned",
      desc: "Little snippets of things I've learned for future reference.",
    }}
  >
    <div>
      <h1>Today I Learned</h1>
      <p>
        Small clippings of things I’ve learned. Maybe shrapnel for future blog
        posts. Maybe not.
      </p>
      <TilContainer>
        {data.allContentfulTil.edges
          .sort((a, b) => {
            return b.node.number - a.node.number;
          })
          .map(({ node: { title, date, tags, content, number } }) => (
            <TILCard
              title={title}
              date={date}
              tags={tags}
              content={content}
              number={number}
            />
          ))}
      </TilContainer>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query tilData {
    site {
      siteMetadata {
        title
        desc
      }
    }

    allContentfulTil(sort: { fields: number }) {
      edges {
        node {
          title
          tags
          date
          number
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
