import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media all and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LinkCardContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default LinkCardContainer;
