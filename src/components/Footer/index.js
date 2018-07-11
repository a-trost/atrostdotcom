import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import logo from "../../images/TrostLogo.png"

const FooterContainer = styled.footer`
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

	.logo{
		grid-area: logo;
		img {height: 45px;}
  }
  .site-map{
		grid-area: site-map;
		display:flex;
		justify-content: space-between;
		ul {
			list-style: none;
			display: flex;
			li {
					padding: 8px 15px;
			}
		}
		
  }
  .social-links{
    grid-area: social-links;
  }
  .copyright{
    grid-area: copyright;
	}

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "logo site-map social-links"
      ". copyright .";
	}
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div class="logo"><img src={logo} /></div>
        <div class="site-map">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/posts">Blog</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
				</div>
        <div class="social-links">Social Links</div>
        <div class="copyright">© 2018 Alex Trost</div>
      </FooterContainer>
    );
  }
}
