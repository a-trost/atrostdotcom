import React from "react";
import { Global } from "@emotion/core";
import { css } from "theme-ui";
import { Container } from "theme-ui";
import Layout from "../../components/Layout";
export default props => (
  <>
    <Global
      styles={css({
        "*": {
          boxSizing: `border-box`,
        },
        body: {
          margin: 0,
          fontFamily: `body`,
        },
      })}
    />
    <Layout>
      <Container>{props.children}</Container>
    </Layout>
  </>
);
