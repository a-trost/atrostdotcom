import React, { Component } from "react";
import ContactForm from "../components/Contact";
import Layout from "../components/Layout";

const Contact = ({ data, location, history, match }) => (
  <Layout location={location} history={history} match={match}>
    <ContactForm />
  </Layout>
);

export default Contact;
