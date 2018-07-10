import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({post}) => {
  return (
  <article>
  <Link to={post.fields.slug}><h3>{post.frontmatter.title}</h3></Link>
	<p>{post.excerpt} <Link to={post.fields.slug}>continue reading =></Link></p>

  </article>
  ) 
}


export default PostListing;