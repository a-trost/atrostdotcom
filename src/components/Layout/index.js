import React from "react";
// import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Header from "../Header";
import Footer from "../Footer";
import favicon16 from "../../images/favicon16.png";
import favicon32 from "../../images/favicon32.png";
import favicon64 from "../../images/favicon64.png";
import "prismjs/themes/prism-coy.css";
import "./index.css";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
`;

const ChildWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  width: 95vw;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children, location, match }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            desc
          }
        }
        file(relativePath: { regex: "/herobg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Alex Trost - Front-End Web Developer and Graphic Designer",
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
          >
            <Img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                zIndex: -1,
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </Header>
          <ChildWrapper>{children}</ChildWrapper>
          <Footer />
        </Container>
      </>
    )}
  />
);

export default Layout;
