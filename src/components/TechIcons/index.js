import React, { Component } from "react";
import styled from "styled-components";
import Icon from "./icons";

const TechUsed = styled.h5`
  margin: 1rem auto 1rem auto;
`;

const TechList = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  margin-bottom: 1.5rem;
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      padding: 0 10px;
    }
  }
`;

export default class index extends Component {
  render(props) {
    return (
      <>
        <TechUsed>Tech Used</TechUsed>
        <TechList>
          <ul>
            {this.props.tech.map(tech => (
              <li>
                <Icon string={tech} fill={this.props.color} />
              </li>
            ))}
          </ul>
        </TechList>
      </>
    );
  }
}
