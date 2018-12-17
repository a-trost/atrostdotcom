import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu from "../Menu";
import { Link } from "gatsby";

import portrait from "../../images/AlexPortrait.jpg";

const HeaderWrapper = styled.header`
  background: gray;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome, menuOpen }) =>
    isHome ? "100vh" : menuOpen ? "80vh" : "20vh"};
  @media all and (min-width: 800px) {
    height: ${({ isHome, menuOpen }) =>
      isHome ? "80vh" : menuOpen ? "80vh" : "20vh"};
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: grid;

  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "site-name nav"
    "intro-text intro-text";

  @media all and (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    grid-template-rows: 1fr 4fr;
  }
`;

const NamePictureContainer = styled.div`
  flex-flow: row nowrap;
  display: flex;
  grid-area: site-name;
`;

const HeaderPortrait = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: none;
  }
  @media all and (min-width: 500px) {
    img {
      height: 50px;
      width: 50px;
      display: flex;
    }
  }
  @media all and (min-width: 700px) {
    img {
      height: 80px;
      width: 80px;
    }
  }
`;

const HeaderName = styled.div`
  padding-top: 8px;
  .name {
    display: flex;
    color: white;
    font-family: "Rubik", sans-serif;
    padding-left: 13px;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 1.7rem;
    margin: 0;
  }
  .title {
    display: none;
  }
  @media all and (min-width: 600px) {
    .name {
      font-size: 2rem;
      line-height: 2rem;
    }
    .title {
      display: flex;
      color: #eee;
      font-family: "Rubik", sans-serif;
      padding-left: 13px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      margin: 0;
    }
  }
`;

const IntroText = styled.div`
  display: block;
  grid-area: intro-text;
  animation: fadeAndScale 2s ease-in;
  color: white;
  font-family: "Rubik", sans-serif;
  place-self: center;
  h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 500;
  }
  .rwd-line {
    display: block;
  }
  .subheader {
    font-size: 2rem;
    font-weight: 300;
    line-height: 2rem;
  }

  /* Medium screens */
  @media all and (min-width: 600px) {
    h1 {
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
    h1 {
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

  @keyframes fadeAndScale {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const menuOpen = !this.state.menuOpen;
    this.setState({ menuOpen });
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === "/") {
        this.wrapper.animate([{ height: "20vh" }, { height: "80vh" }], {
          duration: 600,
          fill: "forwards",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          iterations: 1,
        });
      } else {
        this.wrapper.animate([{ height: "80vh" }, { height: "20vh" }], {
          duration: 600,
          fill: "forwards",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          iterations: 1,
        });
      }
    }
  };

  render(props) {
    const { location, children } = this.props;
    const isHome = location.pathname === "/";
    return (
      <>
        <HeaderWrapper
          isHome={isHome}
          menuOpen={this.state.menuOpen}
          ref={wrapper => {
            this.wrapper = ReactDOM.findDOMNode(wrapper);
          }}
        >
          <HeaderContainer>
            <NamePictureContainer>
              <HeaderPortrait>
                <Link to="/">
                  <img src={portrait} alt="Alex Trost Portrait" />
                </Link>
              </HeaderPortrait>
              <HeaderName>
                <Link to="/">
                  <h3 className="name">Alex Trost</h3>
                  <h4 className="title">Front-End Web Developer</h4>
                </Link>
              </HeaderName>
            </NamePictureContainer>
            <Menu
              handleClick={this.handleClick}
              menuOpen={this.state.menuOpen}
            />
            {isHome && (
              <IntroText>
                <h1>
                  Hey, <span className="rwd-line">I'm Alex.</span>
                </h1>
                <h2 className="subheader">Developer, Designer, Teacher.</h2>
              </IntroText>
            )}
            {children}
          </HeaderContainer>
        </HeaderWrapper>
      </>
    );
  }
}
