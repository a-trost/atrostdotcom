import React from "react";
import styled from "styled-components";
import Link from "../Link";
import { navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Card = styled.article`
  display: flex;
  cursor: pointer;
  height: 100%;
  padding: 1.75rem 1.25rem;
  flex-flow: column nowrap;
  background-image: linear-gradient(to top, #fafafa 0, #fdfdfd 20%, #fff 60%);
  -moz-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  -webkit-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  position: relative;
  transform: rotate(calc(1deg * var(--card-rotation)));
  :hover {
    -moz-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    -webkit-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
  }

  h3 {
    margin-top: 0;
    font-size: 24px;
    font-variation-settings: var(--font-semibold);
    line-height: 1.3;
    margin-bottom: 2rem;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text);
  }

  .read-on {
    font-size: 18px;
    font-variation-settings: var(--font-semibold);
    color: var(--color-primary);
    display: flex;
    justify-content: start;
    align-items: center;
    justify-self: flex-end;
    place-self: flex-end;
    align-self: flex-end;

    margin-bottom: 0;
    margin-top: auto;

    svg {
      margin-left: 0.5rem;
      height: 20px;
      width: 20px;
    }
  }

  .draft {
    position: absolute;
    top: -2px;
    left: -5px;
    transform: rotate(-13deg);
    text-transform: uppercase;
    font-size: 12px;
    font-variation-settings: var(--font-bold);
    background-color: #ffc700;
    color: var(--color-gray-700);
    padding: 4px 10px;
    border-radius: 4px;
  }
`;

const PostListing = ({ post }) => {
  const image = getImage(post.frontmatter.image);
  const slug = "/" + post.slug;

  function navigateTo(slug) {
    navigate(slug);
  }
  return (
    <Card
      onClick={() => {
        navigateTo(slug);
      }}
      style={{ "--card-rotation": post.frontmatter.published ? 0 : "-3" }}
    >
      <Link to={slug}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      {!post.frontmatter.published && <p className="draft">Draft</p>}
      <p>{post.excerpt}</p>

      <p className="read-on">
        Read On{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="read-on-arrow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </p>
    </Card>
  );
};

export default PostListing;
