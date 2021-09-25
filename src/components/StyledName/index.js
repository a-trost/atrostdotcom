import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import COLORS from "@constants/colors";
const HeaderName = styled(Link)`
  display: flex;
  color: ${COLORS.blue[800]};
  font-family: "InterVariable", sans-serif;
  padding-left: 13px;
  font-variation-settings: var(--font-light);
  font-size: 1.5rem;
  line-height: 1rem;
  margin: 0;
  transition: color 300ms ease-in-out;

  @media all and (min-width: 600px) {
    font-size: 1.75rem;
    line-height: 1.4rem;
  }

  .last-name {
    font-variation-settings: var(--font-semibold);
    /* margin-left: 0.2ch; */
  }

  &:hover {
    color: ${COLORS.secondary};
  }
`;

export default function StyledName(props) {
  return (
    <HeaderName {...props}>
      {`Alex `}
      <span className="last-name">{` Trost`}</span>
    </HeaderName>
  );
}
