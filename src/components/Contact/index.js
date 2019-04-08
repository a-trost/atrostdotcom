import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-wrap: wrap;
  @media all and (min-width: 600px) {
    flex-wrap: no-wrap;
  }
`;

const FormHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  @media all and (min-width: 600px) {
    width: 50%;
  }
`;

const Input = styled.input`
  font-family: Rubik, sans-serif;
  font-size: 1.1rem;
  color: #333;
  width: 100%;
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  :hover {
    border: 1px solid #aaa;
  }
  :focus {
    background: #f5f5ff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-family: Rubik, sans-serif;
  font-size: 1.1rem;
  color: #333;
  display: block;
  width: 100%;
  height: 180px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  :hover {
    border: 1px solid #aaa;
  }
  :focus {
    background: #f5f5ff;
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: #fff;
  font-family: Rubik, sans-serif;
  font-weight: 200;
  letter-spacing: 2pt;
  cursor: pointer;
  width: 100%;
  border: none;
  background: #1a87cd;
  margin: 0 10px 5px;
  padding: 10px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  :hover {
    background: #1e76c1;
    outline: none;
  }
  :active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    background: #2265b5;
    outline: none;
  }
  :focus {
    background: #1e76c1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    outline: none;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>
          Hey, I'd love to hear from you. Questions, comments, jobs, projects,
          whatever. Give me a shout.
        </p>
        <form
          name="contact"
          method="post"
          action="/contact-thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <FormContainer>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <FormHalf>
              <p>
                <label>
                  Name:
                  <br />
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  Email:
                  <br />
                  <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </p>
            </FormHalf>
            <FormHalf>
              <p>
                <label>
                  Message:
                  <br />
                  <TextArea name="message" onChange={this.handleChange} />
                </label>
              </p>
            </FormHalf>

            <Button type="submit">Send</Button>
          </FormContainer>
        </form>
      </div>
    );
  }
}
