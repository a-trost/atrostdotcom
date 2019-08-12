import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Layout from "../components/Layout";

const TilContainer = styled.div`
  margin-bottom: 40px;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  span {
    line-height: 1;
    background: #ebebeb;
    border-radius: 1rem;
    font-size: 14px;
    color: #666;
    padding: 0.25rem 0.5rem;
  }
  span + span {
    margin-left: 0.5rem;
  }
`;

const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  background-image: linear-gradient(to top, #fafafa 0, #fdfdfd 20%, #fff 60%);
  -moz-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  -webkit-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  :hover {
    -moz-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    -webkit-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
  }

  h2 {
    margin-bottom: 0;
  }
  .date {
    font-size: 13px;
    color: #888;
    margin-bottom: 0;
  }
`;

const Content = styled.article`
  margin-top: 2rem;
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
      <TilContainer>
        {data.allContentfulTil.edges.map(
          ({ node: { title, date, tags, content } }) => (
            <Card>
              <h2>{title}</h2>
              <p class="date">{date}</p>
              <Tags>
                {tags.map(tag => (
                  <span>{tag}</span>
                ))}
              </Tags>
              <Content
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
              />
            </Card>
          )
        )}
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

    allContentfulTil {
      edges {
        node {
          title
          tags
          date
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
