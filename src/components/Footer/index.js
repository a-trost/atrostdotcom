import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import twitterLogo from "../../images/Twitter.svg";
import githubLogo from "../../images/Github.svg";
import linkedInLogo from "../../images/Linkedin.svg";
import StyledName from "../StyledName";

const Footer = () => {
  const SocialIcon = styled.img`
    padding: 5px;
    transition: all 0.15s ease;
    :hover {
      padding: 3px;
    }
  `;

  const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .inner {
      max-width: 1200px;
      margin: 1rem;
      border-top: 2px solid #dedede;
      padding: 40px 20px;
      font-family: "InterVariable";
      font-size: 1.1rem;
      font-variation-settings: var(--font-light);
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
        flex-direction: column;
        margin: 0;
        li {
          text-align: center;
          padding: 1px 5px;
          font-size: 17px;
          margin: 0;
          font-family: "InterVariable";
          letter-spacing: 0.6px;
        }
      }
      .logo {
        grid-area: logo;
        img {
          max-height: 45px;
          width: auto;
          margin: 0;
        }
      }
      .site-map {
        grid-area: site-map;
        display: flex;
        justify-content: space-between;
      }
      .social-links {
        grid-area: social-links;
        ul {
          flex-direction: row;
          margin: 0;
          li {
            padding: 1px 10px;
          }
        }
      }
    }
    .copyright {
      grid-area: copyright;
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-variation-settings: var(--font-medium);
      color: #777;
    }
    @media all and (min-width: 700px) {
      .inner {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
          "logo site-map social-links"
          ". copyright .";
        ul {
          flex-direction: row;
          li {
            padding: 8px 10px;
          }
        }
      }
    }
  `;

  return (
    <FooterContainer>
      <div className="inner">
        <div className="logo">
          <StyledName to="/" />
        </div>
        <div className="site-map">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Blog</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/trostcodes/">
                <SocialIcon
                  height="40"
                  width="40"
                  src={linkedInLogo}
                  alt="Alex Trost's LinkedIn"
                  title="Alex Trost's LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/a-trost">
                <SocialIcon
                  height="40"
                  width="40"
                  src={githubLogo}
                  alt="Alex Trost's Github"
                  title="Alex Trost's Github"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TrostCodes">
                <SocialIcon
                  height="40"
                  width="40"
                  src={twitterLogo}
                  alt="Alex Trost's Twitter"
                  title="Alex Trost's Twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <span>© 2018-2021 Alex Trost</span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
