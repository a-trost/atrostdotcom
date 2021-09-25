import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu from "../Menu";
import { useSpring, config } from "react-spring";
import StyledName from "../StyledName";
import COLORS from "@constants/colors";

const HeaderWrapper = styled.header``;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;

  @media all and (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
    ${"" /* grid-gap: 10px; */}
  }
`;

const NamePictureContainer = styled.div`
  flex-flow: row nowrap;
  display: flex;
  align-items: flex-end;
  grid-area: site-name;
  margin-bottom: 0.5rem;
`;

const BgImage = styled.div`
  background: ${COLORS.white};
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

const Header = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navAnimation = useSpring({
    transform: menuOpen ? `translate3d(0, 0, 0)` : `translate3d(120%, 0, 0)`,
    config: config.default,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHome = location.pathname === "/";
  return (
    <header
      isHome={isHome}
      menuOpen={menuOpen}
      ref={(wrapper) => {
        wrapper = ReactDOM.findDOMNode(wrapper);
      }}
    >
      <HeaderContainer>
        <NamePictureContainer>
          <StyledName to="/" className="header-link"></StyledName>
        </NamePictureContainer>
        <Menu
          style={navAnimation}
          handleClick={toggleMenu}
          menuOpen={menuOpen}
        />
      </HeaderContainer>
    </header>
  );
};

export default Header;
