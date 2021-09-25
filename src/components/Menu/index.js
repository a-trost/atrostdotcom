import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { animated } from "react-spring";
import COLORS from "@constants/colors";

const Nav = styled.div`
  padding-top:8px;
  grid-area: nav;
  justify-self: end;
  align-self: end;
  font-family: "InterVariable", sans-serif;
  font-size: 1rem;
   font-variation-settings: var(--font-bold);
  letter-spacing:0px;
  a {
    color: ${COLORS.blue[800]};
    text-decoration: none;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    a {
      display: flex;
      line-height: 1;
      color: ${COLORS.blue[800]};
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      transition: all 0.4s ease;
      position: relative;
      z-index: 1;
    }
    li a::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: ${COLORS.yellow[400]};
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}
li a:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
    }

    .mobile-toggle button {
      justify-self: start;
      position: absolute;
      left: -99999em;
    }
  }

  @media (max-width: 850px) {
    ul {
      align-items: flex-end;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-end;
      li {
        margin-right: 7px;
      }
      a {
        position: absolute;
        left: -99999em;
      }
      &.open {
        div,
        a {
          position: static;
        }
      }
      .mobile-toggle {
        button,
        a {
          position: static;
        }
      }
    }
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 850px) {
    margin: 0;
    box-sizing: border-box;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    background: #3192d3;
    font-family: "InterVariable", sans-serif;
    overflow: hidden;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      li {
        margin: 0;
        font-size: 10vw;
        text-align: center;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        a,
        .inner-toggle {
          width: 100%;
          height: 100%;
          color: white;
          display: flex;
          padding: 2rem;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease-in-out;
          :hover {
            background: #3db3ea;
          }
        }
      }
    }
  }
`;

const AnimatedMobileNav = animated(MobileNav);

const RenderListItems = (handleClick) => (
  <>
    <li className="home">
      <Link onClick={handleClick} to="/">
        Home
      </Link>
    </li>
    <li className="blog">
      <Link onClick={handleClick} to="/posts">
        Blog
      </Link>
    </li>
    <li className="about">
      <Link onClick={handleClick} to="/about">
        About
      </Link>
    </li>
  </>
);

const Menu = ({ menuOpen, handleClick, style }) => {
  let listClass = menuOpen ? "open" : "";
  return (
    <>
      <Nav>
        <ul>
          <li className="mobile-toggle">
            <button
              onClick={handleClick}
              type="button"
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "8px",
              }}
            >
              <MenuOpenIcon alt="Menu" width="25px" height="25px" />
            </button>
          </li>
          {RenderListItems(handleClick)}
        </ul>
      </Nav>
      <AnimatedMobileNav style={style}>
        <MobileNav>
          <ul className={listClass}>
            <li className="mobile-toggle">
              <button
                className="inner-toggle"
                onClick={handleClick}
                type="button"
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                }}
              >
                <MenuCloseIcon
                  alt="Mobile navigation toggle"
                  width="25px"
                  height="25px"
                />
              </button>
            </li>
            {RenderListItems(handleClick)}
          </ul>
        </MobileNav>
      </AnimatedMobileNav>
    </>
  );
};

export default Menu;

const MenuOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.8 81.5" {...props}>
    <defs></defs>
    <g id="prefix__Layer_2" data-name="Layer 2">
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: "currentcolor" }}
          d="M8.15 16.3h81.5a8.15 8.15 0 000-16.3H8.15a8.15 8.15 0 000 16.3zM89.65 32.6H8.15a8.15 8.15 0 000 16.3h81.5a8.15 8.15 0 000-16.3zM89.65 65.2H8.15a8.15 8.15 0 000 16.3h81.5a8.15 8.15 0 000-16.3z"
        />
      </g>
    </g>
  </svg>
);

const MenuCloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.93 73.93" {...props}>
    <defs>
      <style>{".prefix__cls-1{fill:#fff}"}</style>
    </defs>
    <g id="prefix__Layer_2" data-name="Layer 2">
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <path
          className="prefix__cls-1"
          d="M13.91 71.54l57.63-57.63A8.15 8.15 0 0060 2.39L2.39 60a8.15 8.15 0 0011.52 11.54z"
        />
        <path
          className="prefix__cls-1"
          d="M2.39 13.91L60 71.54A8.15 8.15 0 0071.54 60L13.91 2.39A8.15 8.15 0 002.39 13.91z"
        />
      </g>
    </g>
  </svg>
);
