import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import FeatureSection from "../components/FeatureSection";
import videoImage from "../images/netlifyDevVideo.jpg";
import courseImage from "../images/courseImage.jpg";
import talkImage from "../images/talkImage.jpg";
import Link from "../components/Link";
import SEO from "../components/SEO";

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export default ({
  data: { allMarkdownRemark, allFeedOverlapPodcast },
  location,
  history,
}) => {
  const blogpost = allMarkdownRemark.edges[0].node;
  return (
    <Layout location={location} history={history}>
      <SEO />
      <IntroText>
        I'm a Front-End Engineer in New Haven, Connecticut making fast and
        awesome websites and apps.
      </IntroText>
      <IntroText>
        I'm always learning and sharing what I've learned. Here are some ways
        you can find what I've been up to.
      </IntroText>
      {/* <FeatureSection
      reverse
      sectionTitle="Blog"
      gatsbyImage={
        allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp
      }
      itemTitle={allMarkdownRemark.edges[0].node.frontmatter.title}
      ctaText="Go to Blog"
      ctaLink="/posts"
      styleNumber={1}
    >
      <p>Test</p>
    </FeatureSection> */}
      <FeatureSection
        reverse
        sectionTitle="Blog"
        gatsbyImage={blogpost.frontmatter.image.childImageSharp}
        ctaText="Go to Blog"
        ctaLink="/posts"
        styleNumber={1}
      >
        <p>
          I occasionally write articles about programming, teaching, design,
          productivity, etc.
        </p>
        <p>
          Check out my latest post,{" "}
          <Link to={blogpost.fields.slug}>{blogpost.frontmatter.title}</Link>
        </p>
      </FeatureSection>
      <FeatureSection
        sectionTitle="Podcast"
        imageUrl="https://storage.buzzsprout.com/variants/frKj2VG7WAwbT4pKyN3vSrvq/8d66eb17bb7d02ca4856ab443a78f2148cafbb129f58a3c81282007c6fe24ff2?.jpg"
        ctaText="Go to The Overlap"
        ctaLink="https://www.overlappodcast.com"
        styleNumber={2}
      >
        <p>
          I co-host a podcast on the intersection Design and Development with my
          cousin, Elle. We touch on topics like typography, React, freelancing,
          and more.{" "}
        </p>

        <p>
          Subscribe in your podcast player and listen to our latest episode,{" "}
          <b>CSS Grid</b>.
        </p>
      </FeatureSection>

      <FeatureSection
        reverse
        sectionTitle="Courses"
        imageUrl={courseImage}
        ctaText="Go to Skillshare"
        ctaLink="https://www.skillshare.com"
        styleNumber={3}
      >
        <p>
          I've created a course for Skillshare that teaches all about animating
          an SVG scene with GreenSock! We cover the basics of SVG, how to set up
          the scene, and how to use GreenSock to make seamless animations.{" "}
          <b>Coming Soon!</b>
        </p>
      </FeatureSection>
      <FeatureSection sectionTitle="Talks" imageUrl={talkImage} styleNumber={4}>
        <b>Upcoming Talks</b>
        <ul>
          <li>
            <a href="https://devfestnh.com">Google Devfest New Haven 2019</a>
          </li>
        </ul>
      </FeatureSection>
      <FeatureSection
        reverse
        sectionTitle="Videos"
        imageUrl={videoImage}
        ctaText="Go to Youtube"
        ctaLink="https://www.youtube.com/user/alexrtrost/videos"
        styleNumber={1}
      >
        <p>
          Sometimes I'll livestream or record videos on programming on Youtube.
        </p>
      </FeatureSection>
    </Layout>
  );
};

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: 1
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 800, traceSVG: { color: "rgb(43, 129, 200)" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
          excerpt(pruneLength: 180)
        }
      }
    }
  }
`;
