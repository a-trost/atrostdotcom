import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
// import TableOfContents from "../components/TableOfContents";

const TilHeader = styled.h1`
  margin: 5px;
  padding:0;
  color: #444;
  border:0;
  font-size: 2rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center;
  @media all and (max-width:500px){
    font-size: 2rem;
  }
`;
const TilDate = styled.p`
  line-height: 0.9rem;
  color: #aaa;
  font-size: 0.9rem;
  text-align: center;
  max-width: unset;
  margin-bottom: 2rem;
`;

const TilWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const TilContent = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 680px;
    width: 100%;
  }
  .gatsby-resp-image-link {
    box-shadow: 5px 5px 20px 0 rgba(46, 61, 73, 0.15);
  }
  .gatsby-highlight {
    align-self: flex-start;
    justify-self: flex-start;
    max-width: 100%;
  }
`;

export default class PostPage extends Component {
  render() {
    const { data, location, history } = this.props;
    if (!data) return null;
    return (
      <Layout location={location} history={history}>
        <TilHeader>{data.contentfulTil.title}</TilHeader>
        <TilDate>{data.contentfulTil.date}</TilDate>
        <TilWrapper>
          <TilContent
            dangerouslySetInnerHTML={{
              __html: data.contentfulTil.content.childMarkdownRemark.html,
            }}
          />
        </TilWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
  query TilQuery($title: String!) {
    site {
      siteMetadata {
        title
        desc
      }
    }
    contentfulTil(title: { eq: $title }) {
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
`;
