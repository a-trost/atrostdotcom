import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import portrait from "../../images/AlexPortrait.jpg";

const HeaderWrapper = styled.header`
  background: gray;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "80vh" : "20vh")};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: grid;

  grid-template-columns: auto;
  grid-gap: 10px;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "site-name "
    "intro-text"
    "nav";

    @media all and (min-width:800px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      grid-template-rows: 1fr 4fr;
      grid-template-areas:
        "site-name nav"
        "intro-text intro-text";
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
  }
  @media all and (min-width: 600px) {
    img {
      height: 80px;
      width: 80px;
    }
  }
`;

const HeaderName = styled.div`
  padding-top:8px;
  .name {
    display: flex;
    color: white;
    font-family: "Rubik", sans-serif;
    padding-left: 13px;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2rem;
    margin: 0;
  }
  .title {
    display: none;
  }
  @media all and (min-width: 600px) {
    .name {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
    .title {
      display: flex;
      color: rgb(255, 255, 255, 80%);
      font-family: "Rubik", sans-serif;
      padding-left: 13px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      margin: 0;
    }
  }
`;

const MainNav = styled.nav`
  padding-top:8px;
  grid-area: nav;
  justify-self: end;
  ul {
    list-style: none;
    display: flex;
    font-family: "Rubik", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    li {
      a {
        color: white;
        padding: 8px 15px;
        border-radius: 6px;
        &:hover {
          background: #ffffff33;
        }
      }
    }
  }
`;

const IntroText = styled.div`
  display: block;
  grid-area: intro-text;
  animation: fadeAndScale 0.7s ease-in;
  font-size: 4rem;
  line-height: 4rem;
  color: white;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  place-self: center;
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
    font-size: 6rem;
    line-height: 5rem;
    .subheader {
      font-size: 3.5rem;
      line-height: 3.3rem;
    }
  }

  /* Large screens */
  @media all and (min-width: 800px) {
    font-size: 7rem;
    line-height: 6rem;
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

  render() {
    const { data, location } = this.props;
    const isHome = location.pathname === "/";
    return (
      <React.Fragment>
        <HeaderWrapper
          isHome={isHome}
          ref={wrapper => {
            this.wrapper = ReactDOM.findDOMNode(wrapper);
          }}
        >
          <HeaderContainer>
              <Link to="/">
            <NamePictureContainer>
                <HeaderPortrait>
                  <img src={portrait} alt="Alex Trost Portrait" />
                </HeaderPortrait>
                <HeaderName>
                  <p className="name">Alex Trost</p>
                  <p className="title">Front-End Web Developer</p>
                </HeaderName>
            </NamePictureContainer>
              </Link>
            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </MainNav>
            {isHome && (
              <IntroText>
                <p>
                  Hey, <span className="rwd-line">I'm Alex.</span>
                </p>
                <p className="subheader">Developer, Designer, Teacher.</p>
              </IntroText>
            )}
          </HeaderContainer>
          <Img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            sizes={data.background.sizes}
          />
        </HeaderWrapper>
      </React.Fragment>
    );
  }
}
