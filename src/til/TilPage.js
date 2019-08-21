import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TILCard from "../components/TILCard";

export default class PostPage extends Component {
  render() {
    const { data, location, history } = this.props;
    if (!data) return null;
    const { title, date, content, number, tags } = data.contentfulTil;
    return (
      <Layout location={location} history={history}>
        <TILCard
          title={title}
          date={date}
          tags={tags}
          content={content}
          number={number}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query TilQuery($title: String!) {
    site {
      siteMetadata {
        title
        desc
      }
    }
    contentfulTil(title: { eq: $title }) {
      title
      tags
      date
      number
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
