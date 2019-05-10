import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import Resume from "../../components/Resume";
import Pomodoro from "../../components/Pomodoro";
import LinkCard from "../../components/LinkCard";
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
      border-width: 120px 140px 0 0;
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
    <AboutLayout>
      <h1 className="header">About</h1>
      <div className="content">
        <p>
          Hey, I’m Alex Trost, a Front-end Developer from Philadelphia, now
          living in New Haven. I like solving problems and eliminating
          repetitive tasks with code. I learned Python and JavaScript to help
          teachers focus on the kids and let computers stress about the rest.
        </p>

        <p>
          I worked in a data-intense school and realized I wasn’t nearly as good
          at parsing the hundreds of data points as a computer would be. So my
          first summer vacation, I taught myself Python so I could make a Django
          webapp. My little school of 300 kids and teachers use it to make
          learning just a bit easier.
        </p>

        <p>
          I tossed a lot of problems at my web app and wanted to take my
          learning further, so I got a Google Developer Challenge Scholarship to
          help me learn JavaScript and frameworks like React. I've worked at
          GoNation as a Front-End Developer and now work at Green Check Verified
          as a Software Engineer.
        </p>
      </div>
      <div className="pictureContainer">
        <Img
          className="picture"
          fluid={data.alexpicture.childImageSharp.fluid}
          alt="Alex Trost and dog"
        />
        <span className="caption">Alex and his dog Milo</span>
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
    alexpicture: file(relativePath: { eq: "images/AlexMilo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default About;
