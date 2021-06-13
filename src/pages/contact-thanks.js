import React from "react";
import { graphql } from "gatsby";
import ContactThanks from "@components/Contact/thanks";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

const Page = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Thanks for reaching out!",
      desc: "Just a thank you page for after a contact form has been submitted.",
    }}
  >
    <SEO />
    <ContactThanks />
  </Layout>
);

export const query = graphql`
  query ContactThanksMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;

export default Page;
