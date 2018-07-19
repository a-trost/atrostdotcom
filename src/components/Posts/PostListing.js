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
`;

const Card = styled.article`
  -moz-box-shadow: 0px 2px 5px #aaa;
  -webkit-box-shadow: 0px 2px 5px #aaa;
  box-shadow: 0px 2px 5px #aaa;
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const PostTitle = styled.h2`
  margin-bottom: 5px;
`;

const Excerpt = styled.p`
  line-height: 1rem;
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
        <Excerpt>
          {post.excerpt} <Link to={post.fields.slug} />
        </Excerpt>
      </TextContainer>
    </Card>
  );
};

export default PostListing;
