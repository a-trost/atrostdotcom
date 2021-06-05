import React from "react";
import { graphql } from "gatsby";
import ProjectsListing from "../components/Projects/ProjectListing";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ProjectContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  justify-items: stretch;
  margin-bottom: 40px;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Projects = ({ data, location, history, match }) => (
  <Layout
    location={location}
    history={history}
    pageData={{
      title: "Projects",
      desc: "Past projects I've done for schools, companies, freelance, or myself. Most use Javascript or Python.",
    }}
  >
    <SEO />
    <h1>Projects</h1>
    <ProjectContainer>
      {data.allMarkdownRemark
        ? data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectsListing key={node.id} project={node} />
          ))
        : "Couldn't find any Projects."}
    </ProjectContainer>
  </Layout>
);

export default Projects;

export const query = graphql`
  query ProjectMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            tech
            demo
            repo
            site
            color
            blurb
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
