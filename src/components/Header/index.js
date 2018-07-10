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
  display:grid;
  grid-template-columns: 1fr minmax(50%, 1000px) 1fr;
  grid-gap: 10px;
  grid-template-rows: 1fr 3fr 1fr;

`;

const TopContainer = styled.div`
grid-column: 1/4;
grid-row: 1;
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
`
const NamePictureContainer = styled.div`
display:flex;
`

const HeaderPortrait = styled.div`
vertical-align: middle;
img {
  height: 75px;
  width: 75px;
  border-radius:50%;
}
`

const HeaderName = styled.div`
  .name {
    display: inline-block;
    color:white;
    font-family: Rubik;
    padding-left: 13px;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin:0;
  }
  .title {
    color:white;
    font-family: Rubik;
    padding-left: 13px;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1rem;
    margin:0; 

  }
`

const MainNav = styled.nav`
ul {
	list-style: none;
  display: flex;
  font-family: Rubik;
  font-size: 1.3rem;
  font-weight:300;
	li {
		a {
			color: white;
      padding: 8px 15px;
			border-radius:6px;
			&:hover {
				background: #FFFFFF33;
			}
		}
	}
}`



const IntroText = styled.div`
  animation: fadeAndScale .7s ease-in;
  grid-column: 2 / 4;
  grid-row: 2;  
  font-size: 4rem;
  line-height: 4rem;
  color: white;
  font-family: Rubik;
  font-weight: 500;
  .rwd-line {
    display:block;
  }
  .subheader {
    font-size: 3rem;
    font-weight: 300;
    line-height: 3rem;
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
      display:inline;
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
`

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {

		const {location} = this.props;
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
    const isHome = location.pathname === "/"
    return (
      <HeaderWrapper
        isHome={isHome}
        ref={wrapper => {
          this.wrapper = ReactDOM.findDOMNode(wrapper);
        }}
      >
        <HeaderContainer>
          <TopContainer>
            <Link to="/">
            <NamePictureContainer>
            <HeaderPortrait>
              
          <img src={portrait} alt="Alex Trost Portrait"/>
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
                <a href="mailto:alexrtrost@gmail.com">Contact Me</Link>
              </li>
            </ul>
          </MainNav>
          </TopContainer>
          {isHome &&
          <IntroText>
            <br/>
            <p>Hey, <span className="rwd-line">I'm Alex.</span></p>
            <p className="subheader">Developer, Designer, Teacher.</p>
            </IntroText>
          }
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
    );
  }
}
