import React, { Component } from "react";
import tocIcon from "../../images/tocIcon.svg";
import styled from "styled-components";

const StyledTOC = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  .tocButton {
    background: none;
    border: none;
    padding: 0.5rem;
    margin-left: 0.5rem;
    box-sizing: border-box;
    display: flex;
  }
  .tocIcon {
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .tocIcon:hover {
    opacity: 1;
  }
  .tocText {
    p {
      margin-bottom: 0.25rem;
    }
    ul {
      list-style: none;
      margin-top: 0;
      li {
        margin: 0;
        margin-bottom: 0.25rem;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
  @media all and (max-width: 700px) {
    position: static;
  }
`;

export default class TableOfContents extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { tableOfContents } = this.props;
    return (
      <StyledTOC>
        <button className="tocButton" onClick={this.handleClick}>
          <img className="tocIcon" src={tocIcon} alt="Table Of Contents" />
        </button>
        {this.state.open && (
          <div
            className="tocText"
            dangerouslySetInnerHTML={{
              __html: tableOfContents,
            }}
          />
        )}
      </StyledTOC>
    );
  }
}
