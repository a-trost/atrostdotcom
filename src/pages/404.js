import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = ({ data, location, history, match }) => (
  <Layout location={location} history={history} match={match}>
    <h2>404, File not found</h2>
    <p>
      Sorry, that file has either moved or never existed. That's the worst, huh?
    </p>
  </Layout>
);

export default NotFoundPage;
