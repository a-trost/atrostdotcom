import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import menuClose from "../../images/x.svg";
import menuOpen from "../../images/burger.svg";

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

export default class Menu extends Component {
  render() {
    let listClass = this.props.menuOpen ? "open" : "";
    let menuText = this.props.menuOpen ? menuClose : menuOpen;
    return (
      <Nav>
        <ul className={listClass}>
          <li className="mobile-toggle">
            <div onClick={this.props.handleClick} style={{ cursor: "pointer" }}>
              <img
                width="25px"
                height="25px"
                src={menuText}
                alt="Mobile navigation toggle"
              />
            </div>
          </li>
          <li onClick={this.props.handleClick}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={this.props.handleClick}>
            <Link to="/posts">Blog</Link>
          </li>
          <li onClick={this.props.handleClick}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={this.props.handleClick}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={this.props.handleClick}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}
