import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import favicon16 from "../images/favicon16.png";
import favicon32 from "../images/favicon32.png";
import favicon64 from "../images/favicon64.png";
import "prismjs/themes/prism-coy.css";
import "./index.css";

const Container = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
`;

const Layout = ({ children, data, location }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "Alex Trost - Front-End Web Developer and Graphic Designer",
        },
        {
          name: "keywords",
          content:
            "frontend, developer, front, end, javascript, graphic design, graphic, react, python, web",
        },
      ]}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
      ]}
    />
    <Container>
      <Header
        data={data}
        siteTitle={data.site.siteMetadata.title}
        location={location}
      />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </Container>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/hero-background.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
