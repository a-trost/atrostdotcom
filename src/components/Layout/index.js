import React from "react";
// import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "prismjs/themes/prism.css";
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
  padding: 1rem 1.0875rem 1.45rem;
`;

const Layout = ({
  children,
  location = "",
  pageData = { title: "", desc: "" },
}) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: site {
          siteMetadata {
            title
            desc
            siteUrl
            image
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `}
    render={data => {
      const seo = data.site.siteMetadata;
      const title = pageData.title
        ? pageData.title.length <= 30
          ? `${pageData.title} | ${seo.title}`
          : `${pageData.title} | Alex Trost`
        : seo.title;
      const desc = pageData.desc || seo.desc;
      return (
        <>
          <Helmet
            title={title}
            meta={[
              {
                name: "description",
                content: desc,
              },
              {
                name: "keywords",
                content:
                  "frontend, developer, gatsby, react, web development, javascript, graphic design, freelance",
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Container>
            <Header data={data} siteTitle={seo.title} location={location} />
            <ChildWrapper>{children}</ChildWrapper>
            <Footer />
          </Container>
        </>
      );
    }}
  />
);

export default Layout;
