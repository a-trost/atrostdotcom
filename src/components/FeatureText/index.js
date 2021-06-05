import React from "react";
import styled from "styled-components";
import Link from "../Link";

const Container = styled.section`
  width: 100%;
  h2 {
    font-size: 3rem;
    margin-top: 0;
  }
  .link-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
  }
  .arrow-icon {
    margin-left: 0.5rem;
  }
`;

export default ({ sectionTitle, reverse, ctaText, ctaLink, children }) => (
  <Container reverse={reverse}>
    <h2>{sectionTitle}</h2>
    {children}
    <div className="link-container">
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="link">
          {ctaText}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="arrow-icon"
          >
            <path
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              fill="#2670BD"
            />
          </svg>
        </Link>
      )}
    </div>
  </Container>
);
