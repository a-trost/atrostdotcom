import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const BlogHeader = styled.h1`
  margin:40px 20px;
  padding:0;
  color: #333;
  border:0;
  font-size: 3rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center;
`;

const BlogCoverImage = styled.img`
  border-radius: 10px;
`;

const BlogDate = styled.p`
  line-height: 2rem;
  color: #aaa;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`;
export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = "Alex Trost - Frontend Web Developer";
    if (!data) return null;
    return (
      <div>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${siteTitle}`}
        />
        <BlogHeader>{data.markdownRemark.frontmatter.title}</BlogHeader>

        <BlogCoverImage src={data.markdownRemark.frontmatter.image} />
        <BlogWrapper
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <BlogDate>{data.markdownRemark.frontmatter.date}</BlogDate>
      </div>
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
