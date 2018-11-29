import React from "react";
import ContactThanks from "../components/Contact/thanks";
import Layout from "../components/Layout";

export default ({ data, location, history, match }) => (
  <Layout location={location} history={history} match={match}>
    <ContactThanks />
  </Layout>
);
