import React from 'react'
import Link from 'gatsby-link'

const ProjectListing = ({project}) => {
  return (
  <article>
  <Link to={project.fields.slug}><h3>{project.frontmatter.title}</h3></Link>
  </article>
  ) 
}


export default ProjectListing;