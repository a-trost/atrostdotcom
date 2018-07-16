import React, { Component } from "react";
import styled from "styled-components";


const ProjectHeader = styled.h1`
  margin:20px;
  padding:0;
  color: #333;
  border:0;
  font-size: 3rem;
  line-height: 1
  text-rendering: optimizeLegibility;
  text-align:center
`

const ProjectCoverImage = styled.img`
  border-radius:10px;
`


export default class ProjectPage extends Component {
  render() {
    const {data} = this.props;
    if (!data) return null;
    return <div>
      
			<ProjectHeader>{data.markdownRemark.frontmatter.title}</ProjectHeader>
      
      <ProjectCoverImage src={data.markdownRemark.frontmatter.image}/>
			<div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}} />
		</div>;
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
