import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import LinkCard from "../../components/LinkCard";
import SEO from "../../components/SEO";
import LinkCardContainer from "../../components/LinkCardContainer";
import styled from "styled-components";

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas: "header ." "content picture";
  grid-gap: 1rem;
  align-items: flex-start;

  .header {
    grid-area: header;
    margin: 0;
  }
  .pictureContainer {
    grid-area: picture;
    margin-bottom: 2rem;
  }
  .content {
    grid-area: content;
    margin-right: 1rem;
  }
  .picture {
    border-radius: 1rem;
    :after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 70px 70px 0 0;
      border-color: transparent #219fed transparent transparent;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }
  .caption {
    font-size: 14px;
    font-style: italic;
    color: #777;
    margin-left: 1rem;
  }

  @media all and (max-width: 700px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "header" "picture" "content";
    grid-gap: 1rem;
    align-items: flex-start;
    .picture {
      height: 50vh;
      max-height: 400px;
    }
    .content {
      margin-right: 0;
    }
  }
`;

const About = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "About",
      desc:
        "Bio and Resume for New Haven based web developer, Alex Trost. He writes about Javascript, React, Gatsby, the web, productivity and more.",
    }}
  >
    <SEO aboutSEO />
    <AboutLayout>
      <h1 className="header">About</h1>
      <div className="content">
        <p>
          Hey, I’m Alex Trost, a Front-end Developer from Philadelphia, now
          living in New Haven. I've been a designer and elementary school
          teacher, now an engineer at Digital Surgeons.
        </p>
      </div>
      <div className="pictureContainer">
        <Img
          className="picture"
          fluid={data.alexpicture.childImageSharp.fluid}
          alt="Alex Trost"
        />
      </div>
    </AboutLayout>

    <LinkCardContainer>
      <LinkCard heading="Resume" path="/about/resume" />
      <LinkCard heading="Habit Tracking" path="/about/tracker" />
    </LinkCardContainer>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    alexpicture: file(relativePath: { eq: "images/alexheadshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, traceSVG: { color: "rgb(43, 129, 200)" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default About;
