import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const trianglePathData = {
  1: "M104.7 14.7a59.2 59.2 0 0 0-31.6 50.4l-28.4 716a59.9 59.9 0 0 0 88.1 55.2l640-342.6a60 60 0 0 0 3-104L164.2 16.4a59 59 0 0 0-59.5-1.7",
  2: "M796.9 45.6a57.5 57.5 0 0 0-54.2-19.9L57.5 141.8a58.1 58.1 0 0 0-34.8 94.7l453 538.9a58.1 58.1 0 0 0 99.3-18l232.2-655.1a57.4 57.4 0 0 0-10.3-56.7",
  3: "M43.2 858.1a57.6 57.6 0 0 0 56.8 10.6l656.4-228.5a58.1 58.1 0 0 0 18.5-99.2L238.5 85a58.1 58.1 0 0 0-94.9 34.2l-120 684.6a57.6 57.6 0 0 0 19.6 54.3",
  4: "M716.4 847a57.7 57.7 0 0 0 30.4-49.1l23.6-694.6a58.2 58.2 0 0 0-85.8-53.1L65.8 386a58 58 0 0 0-2.3 100.8l595.2 358.9a57.4 57.4 0 0 0 57.7 1.3",
};

const coverPathData = {
  1: "M804 843l4.5-366.5L115.4 846z",
  2: "M10 813l489.2-7.1L10 221.9z",
  3: "M790 33L210.3 58.9l579.5 494.5z",
  4: "M35 43l-3.8 359.9L701.4 40.8z",
};

const positionPercent = {
  1: { top: "-40", left: "10" },
  2: { top: "0", left: "0" },
  3: { top: "-60", left: "10" },
  4: { top: "-40", left: "-5" },
};

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  :hover .triangle,
  :hover .triangle-cover {
    transform: rotate(10deg) scale(1.1);
    transform-origin: center center;
  }

  .triangle,
  .triangle-cover {
    position: absolute;
    left: ${({ styleNumber }) => positionPercent[styleNumber].left}%;
    top: ${({ styleNumber }) => positionPercent[styleNumber].top}%;
    transition: transform 0.5s ease-in-out;
  }

  .triangle {
    z-index: -1;
  }

  .triangle-cover {
    z-index: 2;
  }

  .image-border {
    width: 80%;
    z-index: 1;
    display: flex;
    background: #ffffff;
    padding: 3%;
    height: auto;
    border-radius: 7px;
    box-shadow: 1px 1px 6px #00000034;
  }

  .image {
    min-width: 10rem;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  @media all and (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;

const FeatureImage = ({
  imageUrl,
  gatsbyImage,
  itemTitle,
  styleNumber = 1,
}) => (
  <Container styleNumber={styleNumber}>
    <svg
      className="triangle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 818.6 900"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="761.5"
        y1="-32.8"
        x2="342.1"
        y2="371.1"
        gradientTransform="rotate(15.3 392.9 376.7)"
      >
        <stop offset="0" stopColor="#19a2df" />
        <stop offset="1" stopColor="#1e85c4" />
      </linearGradient>
      <path d={trianglePathData[styleNumber]} fill="url(#SVGID_1_)" />
    </svg>
    {gatsbyImage && (
      <div className="image-border">
        <GatsbyImage
          image={gatsbyImage.gatsbyImageData}
          className="image"
          alt={itemTitle}
          title={itemTitle}
        />
      </div>
    )}
    {imageUrl && (
      <div className="image-border">
        <img className="image" src={imageUrl} alt="CSS Grid Podcast" />
      </div>
    )}
    <svg
      className="triangle-cover"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 818.6 900"
    >
      <path fill="#ffffff" d={coverPathData[styleNumber]} />
    </svg>
  </Container>
);

export default FeatureImage;
