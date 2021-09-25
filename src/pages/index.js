import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "@components/Layout";
import COLORS from "@constants/colors";

import SEO from "@components/SEO";

const DescriptionText = styled.div`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
`;

const IntroText = styled.div`
  width: 100%;
  color: ${COLORS.blue[800]};
  font-family: "InterVariable", sans-serif;
  margin-bottom: 2rem;

  .intro {
    font-size: 4rem;
    line-height: 4rem;
    font-variation-settings: "wght" var(--header-weight, 700), "slnt" 10;
    color: ${COLORS.blue[800]};
    animation: fadeIn 2s ease-in, addWeight 3s linear;
  }
  .rwd-line {
    display: block;
    color: ${COLORS.blue[800]};
  }
  .subheader {
    font-size: 2rem;
    font-variation-settings: var(--font-light);
    line-height: 2rem;
    color: ${COLORS.blue[800]};
    animation: fadeIn 2s ease-in;
  }

  /* Medium screens */
  @media all and (min-width: 600px) {
    .intro {
      font-size: 6rem;
      line-height: 5rem;
    }

    .subheader {
      font-size: 3.5rem;
      line-height: 3.3rem;
    }
  }

  /* Large screens */
  @media all and (min-width: 800px) {
    .intro {
      font-size: 7rem;
      line-height: 6rem;
    }
    .rwd-line {
      display: inline;
    }
    .subheader {
      font-size: 4rem;
      line-height: 3.7rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      --header-weight: 100;
    }
    to {
      opacity: 1;
      --header-weight: 700;
    }
  }

  @keyframes addWeight {
    0% {
      font-variation-settings: "wght" 100, "slnt" 0;
    }
    70% {
      font-variation-settings: "wght" 100, "slnt" 0;
    }
    80% {
      font-variation-settings: "wght" 700, "slnt" -4;
    }
    90% {
      font-variation-settings: "wght" 950, "slnt" -9;
    }
    100% {
      font-variation-settings: "wght" 700, "slnt" 0;
    }
  }
`;

const Page = ({ location, history }) => {
  return (
    <Layout location={location} history={history}>
      <SEO />
      <IntroText>
        <h1 className="intro">
          Hey, <span className="rwd-line">I'm Alex.</span>
        </h1>
        <h2 className="subheader">Developer & Teacher.</h2>
      </IntroText>
      <DescriptionText>
        <p>I'm a frontend dev in New Haven, Connecticut. </p>

        <p>
          I run{" "}
          <a
            href="https://frontend.horse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Horse
          </a>
          , where I blog and stream about creative code.
        </p>
        <p>
          I work remotely as a Developer Experience Engineer at{" "}
          <a
            href="https://prismic.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prismic
          </a>
          .
        </p>
      </DescriptionText>
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
