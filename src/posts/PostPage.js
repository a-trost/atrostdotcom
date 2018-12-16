import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const BlogHeader = styled.h1`
  margin:20px 5px;
  padding:0;
  color: #444;
  border:0;
  font-size: 3rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center;
  @media all and (max-width:500px){
    font-size: 2.4rem;
  }
`;

const BlogCoverImage = styled.img`
  border-radius: 10px;
`;

const BlogDate = styled.p`
  line-height: 0.9rem;
  color: #aaa;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-align: center;
`;

const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`;

export default class PostPage extends Component {
  render() {
    const { data, location, history, match } = this.props;
    const siteTitle = "Alex Trost - Frontend Web Developer";
    if (!data) return null;
    return (
      <Layout location={location} history={history} match={match}>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${siteTitle}`}
        />
        <BlogHeader>{data.markdownRemark.frontmatter.title}</BlogHeader>
        <BlogDate>{data.markdownRemark.frontmatter.date}</BlogDate>

        <BlogCoverImage src={data.markdownRemark.frontmatter.image} />
        <BlogWrapper
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;
