import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu from "../Menu";
import { Link } from "gatsby";
import Img from "gatsby-image";

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

  display: none;
  @media all and (min-width: 500px) {
    img {
      height: 50px;
      width: 50px;
      display: flex;
    }
    picture {
      display: flex;
    }
    display: inline-block;
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

const BgImage = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3840 2160'%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%232a60b1%7D.cls-3%7Bfill:%232670bd%7D.cls-4%7Bfill:%232281c8%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Background2'%3E%3Cpath fill='%232e4fa6' d='M0 0v906L532.2 0H0z'/%3E%3Cpath class='cls-2' d='M0 2160h37.8A124.7 124.7 0 0 1 0 2146.8zM532.2 0L0 906v980.1L1107.9 0H532.2z'/%3E%3Cpath class='cls-3' d='M3436.4 0L3840 687V0h-403.6zM526.5 1970L1683.5 0H1108L0 1886.1v260.7a124.7 124.7 0 0 0 37.8 13.2h575.7a127.6 127.6 0 0 1-87-190z'/%3E%3Cpath class='cls-4' d='M1102.2 1970L2259.2 0h-575.6L526.5 1970c-46 78.1 2.2 175 87 190h575.7a127.6 127.6 0 0 1-87-190zM2860.7 0L3840 1667.2V687L3436.4 0h-575.7z'/%3E%3Cpath d='M2259.3 0L1102 1970c-45.9 78.1 2.3 175 87 190h575.7a127.6 127.6 0 0 1-87-190l772.3-1314.7c24.6-42 67.3-63 109.9-63s85.3 21 110 63l772.2 1314.6c45.9 78.2-2.3 175-87 190.1H3840v-492.8L2860.7 0z' fill='%231d92d3'/%3E%3Cpath d='M3442.2 1970L2669.9 655.2c-24.6-42-67.3-63-109.9-63s-85.3 21-110 63l-772.2 1314.6c-45.9 78.2 2.3 175 87 190.1h575.7a127.6 127.6 0 0 1-87-190l196.6-334.7c24.6-42 67.3-62.9 109.9-62.9s85.3 21 110 63l196.5 334.5c45.9 78.2-2.3 175-87 190.1h575.7c84.7-15 132.9-111.9 87-190z' fill='%2319a2df'/%3E%3Cpath d='M2866.5 1970l-196.6-334.7c-24.6-42-67.3-62.9-109.9-62.9s-85.3 21-110 63l-196.5 334.5c-45.9 78.2 2.3 175 87 190.1h439c84.7-15 132.9-111.9 87-190z' fill='%2315b3ea'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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
    color: white;
  }
  .rwd-line {
    display: block;
    color: white;
  }
  .subheader {
    font-size: 2rem;
    font-weight: 300;
    line-height: 2rem;
    color: white;
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
                  <Img
                    fixed={this.props.data.alexpicture.childImageSharp.fixed}
                  />
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
            <BgImage />
          </HeaderContainer>
        </HeaderWrapper>
      </>
    );
  }
}
