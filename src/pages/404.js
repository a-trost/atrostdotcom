import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

const NotFoundPage = ({ data, location, history }) => (
  <Layout
    location={location}
    history={history}
    pageData={{ title: "404", desc: "This page was not found" }}
  >
    <SEO />
    <h1>404, File not found</h1>
    <p>Sorry, that file has either moved or never existed.</p>
  </Layout>
);

export default NotFoundPage;
