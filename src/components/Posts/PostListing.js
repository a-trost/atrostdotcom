import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Waypoint } from "react-waypoint";
import { animated, useSpring, config } from "react-spring";

const ImageContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  display: block;
`;

const CoverImage = styled(Img)`
  position: relative;
  height: auto;
  width: auto;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-bottom: 0;
`;

const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
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
  line-height: 1.5rem;
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const AnimatedCard = animated(Card);

const PostListing = ({ post }) => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    transform: on ? `translate3d(0,0,0)` : `translate3d(50%, 0, 0)`,
    opacity: on ? 1 : 0,
  });
  return (
    <AnimatedCard style={animation}>
      <Waypoint
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <Link to={post.fields.slug}>
        <ImageContainer>
          <CoverImage
            sizes={post.frontmatter.image.childImageSharp.sizes}
            alt={post.frontmatter.title}
            title={post.frontmatter.title}
          />
        </ImageContainer>
      </Link>
      <TextContainer>
        <Link to={post.fields.slug}>
          {/* <PostTitle>{post.frontmatter.title}</PostTitle> */}
        </Link>
        <p>
          {post.excerpt} <Link to={post.fields.slug} />
        </p>
      </TextContainer>
    </AnimatedCard>
  );
};

export default PostListing;
