import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import NewsletterSignup from "../components/NewsletterSignup";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
  align-items: center;
  justify-content: center;
  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 680px;
    width: 100%;
    fill: transparent;
  }

  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover {
    fill: #444;
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

  a.anchor.before {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateX(-100%) translateY(-55%) scale(1.4) rotate(-35deg);
    transition: all 0.2s ease-in-out;
    padding: 0.5rem;
    width: 36px;
  }

  .anchor.before:hover {
    fill: #2670bd;
  }
`;

const PostPage = ({ data, location, history, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
  const headerImage = getImage(post.image);
  if (!data) return null;
  return (
    <Layout location={location} history={history} pageData={post}>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <BlogCoverImage image={headerImage} alt={post.title} />
      <BlogDate>{post.date}</BlogDate>
      {/* <TableOfContents
          tableOfContents={data.mdx.tableOfContents}
        /> */}
      <BlogWrapper>
        <BlogContent>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </BlogContent>
      </BlogWrapper>
      <NewsletterSignup />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        desc
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 1024)
          }
        }
        desc
      }
    }
  }
`;

export default PostPage;
