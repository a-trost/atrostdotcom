import React, { Component } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

const Card = styled.button`
cursor: pointer;
display: flex;
flex: 1 40%;
overflow: hidden;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 1rem;
  height: 150px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 12px;

  flex-flow: column nowrap;
  background-image: linear-gradient(to top, #fafafa 0, #fdfdfd 20%, #fff 60%);
  -moz-box-shadow:  5px 5px 10px 0 rgba(46, 61, 73, 0.15);
  -webkit-box-shadow:  5px 5px 10px 0 rgba(46, 61, 73, 0.15);
  box-shadow: 5px 5px 10px 0 rgba(46, 61, 73, 0.15);
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  
}
:hover {
    -moz-box-shadow: 1px 1px 10px 0 rgba(46, 61, 73, 0.1);
    -webkit-box-shadow: 1px 1px 10px 0 rgba(46, 61, 73, 0.1);
    box-shadow: 1px 1px 10px 0 rgba(46, 61, 73, 0.1);
  }
  :after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 30px 0;
    border-color: transparent #219fed transparent transparent;
    right: 0;
    top: 0;
    position: absolute;
  }

  .subheading {
    font-family: Rubik;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 6px;
    line-height: 1.1;
    font-size: 18px;
    color: #999;
  }

  .heading {
    font-family: Rubik;
    text-transform: capitalize;
    font-weight: 500;
    color: #219fed;
    font-size: 45px;
  }
`;

const handleClick = path => {
  navigate(path);
};

export default class LinkCard extends Component {
  render() {
    return (
      <Card onClick={() => handleClick(this.props.path)}>
        <span className="subheading">View My</span>
        <span className="heading">{this.props.heading}</span>
      </Card>
    );
  }
}
