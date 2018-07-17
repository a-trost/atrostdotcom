import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import logo from "../../images/TrostLogo.png";
import twitterLogo from "../../images/Twitter.svg";
import githubLogo from "../../images/Github.svg";
import linkedInLogo from "../../images/Linkedin.svg";

const FooterContainer = styled.footer`
  background: #eee;
  box-shadow: 0px -3px 5px rgb(0,0,0,20%);
	padding: 40px 20px;
	font-family: Rubik;
	font-size: 1.1rem;
	font-weight: 300;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "logo"
    "site-map"
    "social-links"
    "copyright";
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  justify-items: center;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-direction:column;
    margin:0;
    li {
      text-align:center;
      padding: 1px 5px;
  }
  }
	.logo{
		grid-area: logo;
		img {height: 45px;}
  }
  .site-map{
		grid-area: site-map;
		display:flex;
		justify-content: space-between;
  }
  .social-links{
    grid-area: social-links;
    ul {
    flex-direction:row;
    margin:0;
    li {
      padding: 1px 15px;
    }
    }
  }
  .copyright{
    grid-area: copyright;
    font-size:.8rem;
    line-height:.8rem;
	}
  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "logo site-map social-links"
      ". copyright .";
      ul{
        flex-direction:row;
        li {
          padding: 8px 10px;
        }
    }
`;

const SocialIcon = styled.img`
  padding: 5px
    :hover {
    padding: 3px;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div class="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div class="site-map">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div class="social-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mrtrost/">
                <SocialIcon height="40" width="40" src={linkedInLogo} />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/a-trost">
                <SocialIcon height="40" width="40" src={githubLogo} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MisterTrost">
                <SocialIcon height="40" width="40" src={twitterLogo} />
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">© 2018 Alex Trost</div>
      </FooterContainer>
    );
  }
}
