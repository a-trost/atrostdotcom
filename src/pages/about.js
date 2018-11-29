import React, { Component } from "react";
import Layout from "../components/Layout";

const About = ({ data, location, history, match }) => (
  <Layout location={location} history={history} match={match}>
    <div>
      <h1>About</h1>
      <p>
        Hey, I’m Alex Trost, a Front-end Developer from Philadelphia, now living
        in New Haven. I like solving problems and eliminating repetitive tasks
        with code. I learned Python and JavaScript to help teachers focus on the
        kids and let computers stress about the rest.
      </p>

      <p>
        I worked in a data-intense school and realized I wasn’t nearly as good
        at parsing the hundreds of data points as a computer would be. So my
        first summer vacation, I taught myself Python so I could make a Django
        webapp. My little school of 300 kids and teachers use it to make
        learning just a bit easier.
      </p>

      <p>
        I tossed a lot of problems at my web app and wanted to take my learning
        further, so I got a Google Developer Challenge Scholarship to help me
        learn front end languages like JavaScript and frameworks like React.
        I've graduated with my{" "}
        <a href="https://confirm.udacity.com/XLDCHTKA">Udacity Nanodegree</a>{" "}
        and now I work at GoNation as a Front-End Web Developer.
      </p>
    </div>
  </Layout>
);

export default About;
