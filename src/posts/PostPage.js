import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import NewsletterSignup from "../components/NewsletterSignup";

const BlogCoverImage = styled(GatsbyImage)`
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
    margin: auto;
    width: 100%;
    max-width: 680px;
    margin-bottom: 2rem;
  }
`;

export default class PostPage extends Component {
  render() {
    const { data, location, history, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!data) return null;
    return (
      <Layout location={location} history={history} pageData={post}>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <BlogCoverImage
          sizes={post.image.childImageSharp.sizes}
          alt={post.title}
        />
        <BlogDate>{post.date}</BlogDate>
        {/* <TableOfContents
          tableOfContents={data.markdownRemark.tableOfContents}
        /> */}
        <BlogWrapper>
          <BlogContent
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </BlogWrapper>
        <NewsletterSignup/>
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
