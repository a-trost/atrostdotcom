import React from "react";
import Layout from "@components/Layout";
import Resume from "@components/Resume";
import LinkCard from "@components/LinkCard";
import LinkCardContainer from "@components/LinkCardContainer";

const ResumePage = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Alex Trost's Resume",
      desc: "Resume for New Haven based web developer, Alex Trost. He writes about Javascript, React, Gatsby, the web, productivity and more.",
    }}
  >
    <h1>Resume</h1>
    <Resume />
    <LinkCardContainer>
      <LinkCard heading="About Page" path="/about" />
      {/* <LinkCard heading="Habit Tracking" path="/about/tracker" /> */}
    </LinkCardContainer>
  </Layout>
);

export default ResumePage;
