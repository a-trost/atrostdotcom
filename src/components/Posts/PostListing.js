import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const ImageContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 280px;
  display: block;
`;

const CoverImage = styled.img`
  position: relative;
  height: auto;
  width: auto;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Card = styled.article`
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
`;

const TextContainer = styled.div`
  padding: 1.2rem;
  line-height: 1.25rem;
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const PostListing = ({ post }) => {
  return (
    <Card>
      <ImageContainer>
        <Link to={post.fields.slug}>
          <CoverImage src={post.frontmatter.image} />
        </Link>
      </ImageContainer>
      <TextContainer>
        <Link to={post.fields.slug}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
        </Link>
        <p>
          {post.excerpt} <Link to={post.fields.slug} />
        </p>
      </TextContainer>
    </Card>
  );
};

export default PostListing;
