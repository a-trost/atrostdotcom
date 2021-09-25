import { graphql, StaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import "prismjs/themes/prism.css";
import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import components from "../mdx";
import GlobalStyles from "../GlobalStyles";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-rows: auto 1fr auto;
`;

const ChildWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 95vw;
  max-width: 960px;
  margin: 1rem 1rem 1.45rem;
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
          <MDXProvider components={components}>
            <Container>
              <Header
                data={data}
                siteTitle={
                  pageData.title ? pageData.title + " " + seo.title : seo.title
                }
                location={location}
              />

              <ChildWrapper>{children}</ChildWrapper>
              <Footer />
            </Container>
            <GlobalStyles />
          </MDXProvider>
        </>
      );
    }}
  />
);

export default Layout;
