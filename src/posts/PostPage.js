import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
// import TableOfContents from "../components/TableOfContents";

const BlogCoverImage = styled(Img)`
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const BlogDate = styled.p`
  line-height: 0.9rem;
  color: #aaa;
  font-size: 0.9rem;
  text-align: center;
  max-width: unset;
  margin-bottom: 2rem;
`;

const BlogWrapper = styled.article`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const BlogContent = styled.div`
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

  blockquote {
    border-left: 3px solid #3db3ea;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    margin-left: 0;
    margin: 1rem auto;
    width: 100%;
    max-width: 46rem;
    font-size: 22px;
    font-style: italic;
    color: #666;
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
      <Layout
        location={location}
        history={history}
        pageData={data.markdownRemark.frontmatter}
      >
        <BlogCoverImage
          sizes={data.markdownRemark.frontmatter.image.childImageSharp.sizes}
          alt={data.markdownRemark.frontmatter.title}
        />
        <BlogDate>{data.markdownRemark.frontmatter.date}</BlogDate>
        {/* <TableOfContents
          tableOfContents={data.markdownRemark.tableOfContents}
        /> */}
        <BlogWrapper>
          <BlogContent
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </BlogWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        desc
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        desc
      }
    }
  }
`;
