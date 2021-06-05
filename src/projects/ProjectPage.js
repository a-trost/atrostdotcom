import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import TechIcons from "../components/TechIcons";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

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

const ProjectCoverImage = styled(GatsbyImage)`
  border-radius: 10px;
  height: auto;
  width: 100%;
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
          title: data.mdx.frontmatter.title,
          desc: data.mdx.frontmatter.desc,
        }}
      >
        <ProjectHeader>{data.mdx.frontmatter.title}</ProjectHeader>
        <TechIcons
          tech={data.mdx.frontmatter.tech}
          color={data.mdx.frontmatter.color}
        />
        {data.mdx.frontmatter.image && (
          <ProjectCoverImage
            sizes={data.mdx.frontmatter.image.childImageSharp.sizes}
            alt={data.mdx.frontmatter.title}
          />
        )}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Layout>
    );
  }
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tech
        image {
          childImageSharp {
            gatsbyImageData(width: 630)
          }
        }
        repo
        demo
        color
        date
        blurb
      }
    }
  }
`;
