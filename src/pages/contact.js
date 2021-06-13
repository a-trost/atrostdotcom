import React from "react";
import { graphql } from "gatsby";
import ContactForm from "@components/Contact";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

const Contact = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Contact Me",
      desc: "Feel free to reach out if you need a website, app, or just have a question. Happy to take on new clients or answer any questions.",
    }}
  >
    <SEO />
    <ContactForm />
  </Layout>
);

export default Contact;

export const query = graphql`
  query ContactMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
