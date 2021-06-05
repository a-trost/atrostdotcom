import React from "react";
import styled from "styled-components";

const NewsletterSignup = styled.article`
  display: flex;
  position: relative;
  width: 100%;
  flex-flow: column nowrap;
  padding: 3rem;
  background-color: #ebeff1;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 4rem;

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
    margin-top: 0;
  }

  .input-container {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    margin-top: 1rem;
  }

  .input-label {
    position: absolute;
    font-size: 14px;
    top: -1.5rem;
    color: #777;
  }

  .email-input {
    border: 2px solid #ccc;
    font-size: 18px;
    padding: 0.5rem;
    width: 100%;
    max-width: 14rem;
    border-bottom-left-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    border-right: none;
  }

  .submit-button {
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    background: #15b3ea;
    color: white;
    padding: 0.5rem 1rem;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all ease;
    :hover {
      background: #2993ca;
    }
    border-bottom-right-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  /* Styled triangle */
  ::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 80px 80px 0 0;
    border-color: transparent #219fed transparent transparent;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  @media all and (max-width: 600px) {
    padding: 3rem 2rem;

    h2 {
      font-size: 1.75rem;
    }

    ::after {
      border-width: 50px 50px 0 0;
    }
  }
`;

export default () => (
  <NewsletterSignup>
    <div className="newsletter-header">
      <h2>Let's keep in touch!</h2>
      <p>
        Enter your email to get updated whenever I release new content.
        <br /> No spam, ever.
      </p>
    </div>
    <form
      action="https://tinyletter.com/trostcodes"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/trostcodes', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <div className="input-container">
        <label class="input-label" htmlFor="tlemail">
          Email
        </label>
        <input class="email-input" type="email" name="email" id="tlemail" />
        <input type="hidden" defaultValue={1} name="embed" />
        <input
          class="submit-button"
          type="submit"
          defaultValue="Subscribe"
          value="Subscribe"
        />
      </div>
    </form>
  </NewsletterSignup>
);
