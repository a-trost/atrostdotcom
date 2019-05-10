import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Pomodoro from "../../components/Pomodoro";
import LinkCard from "../../components/LinkCard";
import LinkCardContainer from "../../components/LinkCardContainer";
import styled from "styled-components";

const Tracker = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Pomodoro Tracker",
      desc:
        "Habit tracker for New Haven based web developer, Alex Trost. He writes about Javascript, React, Gatsby, the web, productivity and more.",
    }}
  >
    <h1>Pomodoro Tracker</h1>
    <p>
      In my attempt to keep a public journal for my use of the pomodoro
      technique, I record my logs here to hold myself accountable.{" "}
    </p>
    <Pomodoro />
    <LinkCardContainer>
      <LinkCard heading="About Page" path="/about" />
      <LinkCard heading="Resume" path="/about/resume" />
    </LinkCardContainer>
  </Layout>
);

export default Tracker;
