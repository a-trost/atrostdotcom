import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu from "../Menu";
import { useSpring, config } from "react-spring";
import { Link } from "gatsby";
import logomark from "../../images/logomark.svg";
import COLORS from "@constants/colors";

const HeaderWrapper = styled.header`
  background: gray;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome, menuOpen }) =>
    isHome ? "100vh" : menuOpen ? "80vh" : "auto"};
  @media all and (min-width: 800px) {
    height: ${({ isHome, menuOpen }) =>
      isHome ? "80vh" : menuOpen ? "80vh" : "auto"};
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 1rem;
  z-index: 2;
  position: relative;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 50px 4fr;
  grid-template-areas:
    "site-name nav"
    "intro-text intro-text";

  @media all and (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
  }
`;

const NamePictureContainer = styled.div`
  flex-flow: row nowrap;
  display: flex;
  align-items: flex-end;
  grid-area: site-name;
  margin-bottom: 0.5rem;
`;

const HeaderLogo = styled.div`
  img {
    height: auto;
    width: 30px;
    display: none;
    margin: 0;
  }

  display: none;
  @media all and (min-width: 500px) {
    img {
      width: 40px;
      display: flex;
    }
    picture {
      display: flex;
    }
    display: inline-block;
  }
  @media all and (min-width: 700px) {
    img {
      width: 40px;
    }
  }
`;

const HeaderName = styled(Link)`
  display: flex;
  color: ${COLORS.white};
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

const BgImage = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3840 2160'%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23116699%7D.cls-3%7Bfill:%231276AA%7D.cls-4%7Bfill:%231384B8%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Background2'%3E%3Cpath fill='%23115B8D' d='M0 0v906L532.2 0H0z'/%3E%3Cpath class='cls-2' d='M0 2160h37.8A124.7 124.7 0 0 1 0 2146.8zM532.2 0L0 906v980.1L1107.9 0H532.2z'/%3E%3Cpath class='cls-3' d='M3436.4 0L3840 687V0h-403.6zM526.5 1970L1683.5 0H1108L0 1886.1v260.7a124.7 124.7 0 0 0 37.8 13.2h575.7a127.6 127.6 0 0 1-87-190z'/%3E%3Cpath class='cls-4' d='M1102.2 1970L2259.2 0h-575.6L526.5 1970c-46 78.1 2.2 175 87 190h575.7a127.6 127.6 0 0 1-87-190zM2860.7 0L3840 1667.2V687L3436.4 0h-575.7z'/%3E%3Cpath d='M2259.3 0L1102 1970c-45.9 78.1 2.3 175 87 190h575.7a127.6 127.6 0 0 1-87-190l772.3-1314.7c24.6-42 67.3-63 109.9-63s85.3 21 110 63l772.2 1314.6c45.9 78.2-2.3 175-87 190.1H3840v-492.8L2860.7 0z' fill='%231391C6'/%3E%3Cpath d='M3442.2 1970L2669.9 655.2c-24.6-42-67.3-63-109.9-63s-85.3 21-110 63l-772.2 1314.6c-45.9 78.2 2.3 175 87 190.1h575.7a127.6 127.6 0 0 1-87-190l196.6-334.7c24.6-42 67.3-62.9 109.9-62.9s85.3 21 110 63l196.5 334.5c45.9 78.2-2.3 175-87 190.1h575.7c84.7-15 132.9-111.9 87-190z' fill='%23149FD5'/%3E%3Cpath d='M2866.5 1970l-196.6-334.7c-24.6-42-67.3-62.9-109.9-62.9s-85.3 21-110 63l-196.5 334.5c-45.9 78.2 2.3 175 87 190.1h439c84.7-15 132.9-111.9 87-190z' fill='%2315b3ea'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
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
  display: grid;
  grid-area: intro-text;
  width: 100%;
  grid-template-columns: 1fr minmax(300px, 850px) 1fr;
  color: white;
  font-family: "InterVariable", sans-serif;
  place-self: center;
  .intro {
    grid-column: 2/3;
    font-size: 4rem;
    line-height: 4rem;
    font-variation-settings: "wght" var(--header-weight, 700), "slnt" 10;
    color: white;
    animation: fadeIn 2s ease-in, addWeight 3s linear;
  }
  .rwd-line {
    display: block;
    color: white;
  }
  .subheader {
    font-size: 2rem;
    font-variation-settings: var(--font-light);
    line-height: 2rem;
    color: white;
    animation: fadeIn 2s ease-in;
    grid-column: 2/3;
  }

  /* Medium screens */
  @media all and (min-width: 600px) {
    .intro {
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
    .intro {
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      --header-weight: 100;
    }
    to {
      opacity: 1;
      --header-weight: 700;
    }
  }

  @keyframes addWeight {
    0% {
      font-variation-settings: "wght" 100, "slnt" 0;
    }
    70% {
      font-variation-settings: "wght" 100, "slnt" 0;
    }
    80% {
      font-variation-settings: "wght" 700, "slnt" -4;
    }
    90% {
      font-variation-settings: "wght" 950, "slnt" -9;
    }
    100% {
      font-variation-settings: "wght" 700, "slnt" 0;
    }
  }
`;

const Header = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navAnimation = useSpring({
    transform: menuOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`,
    config: config.gentle,
  });

  const isHome = location.pathname === "/";
  return (
    <HeaderWrapper
      isHome={isHome}
      menuOpen={menuOpen}
      ref={(wrapper) => {
        wrapper = ReactDOM.findDOMNode(wrapper);
      }}
    >
      <HeaderContainer>
        <NamePictureContainer>
          <HeaderLogo>
            <Link to="/" className="header-link">
              <img src={logomark} alt="Alex Trost Logo" />
            </Link>
          </HeaderLogo>
          <HeaderName to="/" className="header-link">
            {`Alex `}
            <span className="last-name">{` Trost`}</span>
          </HeaderName>
        </NamePictureContainer>
        <Menu
          style={navAnimation}
          handleClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        {isHome && (
          <IntroText>
            <h1 className="intro">
              Hey, <span className="rwd-line">I'm Alex.</span>
            </h1>
            <h2 className="subheader">Developer & Teacher.</h2>
          </IntroText>
        )}
        <BgImage />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
