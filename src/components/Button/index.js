import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  border: 2px solid #15B3EA;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: .75rem;
  color: #15B3EA;
  padding: .5rem 1rem;
  letter-spacing:1px;
  font-weight: 600;
  cursor:pointer;
  :hover {
    background:red;
  }
`;

export default ({buttonText, ...props}) => (
  <Button>
    <span {...props}>{buttonText}</span>
  </Button>
);
