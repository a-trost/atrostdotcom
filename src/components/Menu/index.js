import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import menuCloseIcon from "../../images/x.svg";
import menuOpenIcon from "../../images/burger.svg";

const Nav = styled.div`
  padding-top: 8px;
  grid-area: nav;
  justify-self: end;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  a {
    color: white;
    text-decoration: none;
  }
  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    a {
      display: flex;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      transition: all 0.4s ease;
      :hover {
        background: #ffffff33;
      }
    }
    .mobile-toggle div {
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
        div,
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
    background: #2d4fa6;
    font-family: "Rubik", sans-serif;
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
        flex: 1;
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
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease-in-out;
          :hover {
            background: #133a9e;
          }
        }
      }
    }
  }
`;

export default class Menu extends Component {
  render() {
    const { menuOpen, handleClick } = this.props;
    let listClass = menuOpen ? "open" : "";
    let menuToggle = menuOpen ? menuCloseIcon : menuOpenIcon;
    return (
      <>
        <Nav>
          <ul className={listClass}>
            <li onClick={handleClick} className="mobile-toggle">
              <div style={{ cursor: "pointer" }}>
                <img
                  width="25px"
                  height="25px"
                  src={menuToggle}
                  alt="Mobile navigation toggle"
                />
              </div>
            </li>
            <li onClick={handleClick}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/posts">Blog</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/projects">Projects</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
        {menuOpen && (
          <MobileNav>
            <ul className={listClass}>
              <li className="mobile-toggle">
                <div
                  className="inner-toggle"
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    width="25px"
                    height="25px"
                    src={menuToggle}
                    alt="Mobile navigation toggle"
                  />
                </div>
              </li>
              <li onClick={handleClick}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/posts">Blog</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/projects">Projects</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </MobileNav>
        )}
      </>
    );
  }
}
