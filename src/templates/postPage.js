import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "@components/Layout";
import { getImage } from "gatsby-plugin-image";
import SEO from "@components/SEO";
import NewsletterSignup from "@components/NewsletterSignup";
import { MDXRenderer } from "gatsby-plugin-mdx";

const HeaderSection = styled.div`
  max-width: 680px;
  margin: auto;
  width: 100%;
  margin-bottom: 3rem;
  position: relative;

  @media all and (min-width: 600px) {
    margin-bottom: 5rem;
  }
  .blog-title {
    font-size: 2.5rem;
    width: 100%;
    margin-bottom: 1.25rem;
    @media all and (min-width: 600px) {
      font-size: 3.5rem;
      margin-bottom: 1.75rem;
    }
  }
  .stat-container {
    display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
  }
  .blog-date {
    line-height: 0.9rem;
    color: #2c7096;
    font-size: 14px;
    max-width: unset;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  .blog-tags-container {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      color: #2c7096;
      font-variation-settings: var(--font-bold);
      background-color: #e6f6ff;
      padding: 6px 12px;
      line-height: 1;
      border-radius: 8px;
      margin-right: 1rem;
    }
  }

  .info-icon {
    margin-right: 0.5rem;
  }

  .draft {
    position: absolute;
    top: -2px;
    left: -8px;
    transform: rotate(-13deg);
    text-transform: uppercase;
    font-size: 12px;
    font-variation-settings: var(--font-bold);
    background-color: #ffc700;
    color: #444;
    padding: 8px 10px;
    line-height: 1;
    border-radius: 4px;
  }
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
  font-variation-settings: var(--font-regular);
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

  hr {
    border-top: 1px solid #d5d5d5;
    width: 100%;
  }

  .anchor.before:hover {
    fill: #2670bd;
  }

  em {
    font-variation-settings: var(--font-medium-italic);
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

      <HeaderSection>
        {post.draft && <p className="draft">Draft</p>}
        <h1 className="blog-title">{post.title}</h1>
        <div className="stat-container">
          {post.date && (
            <p className="blog-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="info-icon"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                stroke="#368ab9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>{" "}
              {post.date}
            </p>
          )}
          {post.tags?.length && (
            <div className="blog-tags-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                stroke="#368ab9"
                fill="none"
                className="info-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {post.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </HeaderSection>
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
        draft
        title
        tags
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
