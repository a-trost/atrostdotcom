import React from "react";
import styled from "styled-components";
import FeatureImage from "../FeatureImage";
import FeatureText from "../FeatureText";

const Container = styled.section`
  width: 100%;
  margin-top: 8rem;
  display: flex;

  .image-section,
  .text-section {
    min-width: calc(50% - 2rem);
    flex-basis: 20rem;
    flex-grow: 1;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    flex-wrap: wrap;
    margin: -1rem;
    width: 100%;
  }

  > div > div {
    margin: 1rem;
  }

  @media all and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default props => (
  <Container reverse={props.reverse}>
    <div>
      <div className="image-section">
        <FeatureImage {...props} />
      </div>
      <div className="text-section">
        <FeatureText {...props} />
      </div>
    </div>
  </Container>
);
