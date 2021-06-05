import { graphql, StaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import "prismjs/themes/prism.css";
import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

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
    render={(data) => {
      const seo = data.site.siteMetadata;
      return (
        <>
          <MDXProvider>
            <Container>
              <Header data={data} siteTitle={seo.title} location={location} />
              <ChildWrapper>{children}</ChildWrapper>
              <Footer />
            </Container>
          </MDXProvider>
        </>
      );
    }}
  />
);

export default Layout;
