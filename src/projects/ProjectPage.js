import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import TechIcons from "../components/TechIcons";

const ProjectHeader = styled.h1`
  margin:20px;
  padding:0;
  color: #333;
  border:0;
  font-size: 3rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center;
`;

const ProjectCoverImage = styled.img`
  border-radius: 10px;
`;

export default class ProjectPage extends Component {
  render(props) {
    const { data, location, history } = this.props;
    if (!data) return null;
    return (
      <Layout
        location={location}
        history={history}
        pageData={{
          title: data.markdownRemark.frontmatter.title,
          desc: data.markdownRemark.frontmatter.desc,
        }}
      >
        <ProjectHeader>{data.markdownRemark.frontmatter.title}</ProjectHeader>
        <TechIcons
          tech={data.markdownRemark.frontmatter.tech}
          color={data.markdownRemark.frontmatter.color}
        />
        <ProjectCoverImage
          src={data.markdownRemark.frontmatter.image}
          alt={data.markdownRemark.frontmatter.title}
        />
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
        tech
        image
        repo
        demo
        color
        date
        blurb
      }
    }
  }
`;
