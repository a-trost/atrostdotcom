import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const ProjectHeader = styled.h1`
  margin:20px;
  padding:0;
  color: #333;
  border:0;
  font-size: 3rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center
`;

export default class ProjectPage extends Component {
  render(props) {
    const { data, location, history, match } = this.props;
    const siteTitle = "Alex Trost - Frontend Web Developer";
    if (!data) return null;
    return (
      <Layout location={location} history={history} match={match}>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | ${siteTitle}`}
        />
        <ProjectHeader>{data.markdownRemark.frontmatter.title}</ProjectHeader>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Layout>
    );
  }
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;
