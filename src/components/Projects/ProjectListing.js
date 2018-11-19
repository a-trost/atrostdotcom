import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Icon from "./icons";

// const CoverImage = styled.img`
//   position: relative;
//   height: auto;
//   width: auto;
//   border-radius: 0.5rem 0.5rem 0 0;
// `;

const Card = styled.div`
  border-top: 5px solid ${props => props.color};
  background-image: linear-gradient(to top, #fafafa 0, #fdfdfd 20%, #fff 60%);
  -moz-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  -webkit-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  :hover {
    -moz-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    -webkit-box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
    box-shadow: 2px 2px 25px 0 rgba(46, 61, 73, 0.2);
  }
`;

const Container = styled.div`
  padding: 1.5rem;
  line-height: 1.25rem;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  margin: 0.5rem 0 1rem;
  color: ${props => props.color};
  a {
  }
`;

const TechUsed = styled.h5`
  margin: 2rem inherit 0 inherit;
`;

const TechList = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  margin-bottom: 1.5rem;
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      padding: 0 10px;
    }
  }
`;

const ButtonList = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  align-self: flex-end;
`;

const ButtonContainer = styled.div`
  flex: 1 100%;
  align-self: flex-end;
`;

const Button = styled.button`
  cursor: pointer;
  width: 90%;
  border-radius: 3px;
  background-color: white;
  border: 1px solid ${props => props.color};
  padding: 0.5rem 0.8rem;
  color: ${props => props.color};
  transition: all 0.4s ease;
  :hover {
    color: white;
    background-color: ${props => props.color};
  }
  :active {
    outline: none;
    transform: translateY(3px);
  }
  :focus {
    outline: none;
  }
`;

const ProjectListing = ({ project }) => (
  <Card color={project.frontmatter.color}>
    <Container>
      <Link to={project.fields.slug}>
        <ProjectTitle color={project.frontmatter.color}>
          {project.frontmatter.title}
        </ProjectTitle>
      </Link>
      <p>{project.frontmatter.blurb}</p>
      <div>
        <TechUsed>Tech Used</TechUsed>
        <TechList>
          <ul>
            {project.frontmatter.tech.map(tech => (
              <li>
                <Icon string={tech} fill={project.frontmatter.color} />
              </li>
            ))}
          </ul>
        </TechList>
      </div>
      <ButtonList>
        <ButtonContainer>
          <Link to={project.fields.slug}>
            <Button color={project.frontmatter.color}>Read</Button>
          </Link>
        </ButtonContainer>
        {project.frontmatter.demo && (
          <ButtonContainer>
            <a
              href={project.frontmatter.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color={project.frontmatter.color}>Demo</Button>
            </a>
          </ButtonContainer>
        )}
        {project.frontmatter.repo && (
          <ButtonContainer>
            <a
              href={project.frontmatter.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color={project.frontmatter.color}>Repo</Button>
            </a>
          </ButtonContainer>
        )}
      </ButtonList>
    </Container>
  </Card>
);

export default ProjectListing;
