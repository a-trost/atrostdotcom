import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "@components/Layout";

import SEO from "@components/SEO";

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Page = ({ location, history }) => {
  return (
    <Layout location={location} history={history}>
      <SEO />
      <IntroText>
        I'm a frontend dev in New Haven, Connecticut. I run{" "}
        <a
          href="https://frontend.horse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Horse
        </a>
        , where I blog and stream about creative code. I work remotely as a
        Developer Experience Engineer at{" "}
        <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
          Prismic
        </a>
        .
      </IntroText>
    </Layout>
  );
};

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;

export default Page;
