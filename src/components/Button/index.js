import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  border: 2px solid #15b3ea;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 0.75rem;
  color: #15b3ea;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  font-variation-settings: var(--font-medium);
  cursor: pointer;
  :hover {
    background: red;
  }
`;

export default ({ buttonText, ...props }) => (
  <Button>
    <span {...props}>{buttonText}</span>
  </Button>
);
