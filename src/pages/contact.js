import React, { Component } from "react";
import ContactForm from "../components/Contact";

export default class Contact extends Component {
  render() {
    return (
      <div>
        Hey, please reach out, I'd love to hear from you.
        <ContactForm />
      </div>
    );
  }
}
