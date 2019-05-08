import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Resume from "../../components/Resume";
import LinkCard from "../../components/LinkCard";
import styled from "styled-components";

const LinkCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  button:first-child {
    margin-right: 1rem;
  }
`;

const ResumePage = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Alex Trost's Resume",
      desc:
        "Resume for New Haven based web developer, Alex Trost. He writes about Javascript, React, Gatsby, the web, productivity and more.",
    }}
  >
    <h1>Resume</h1>
    <Resume />
    <LinkCardContainer>
      <LinkCard heading="About Page" path="/about" />
      <LinkCard heading="Habit Tracking" path="/about/tracker" />
    </LinkCardContainer>
  </Layout>
);

export default ResumePage;
