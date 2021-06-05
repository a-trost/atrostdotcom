const path = require("path");
const slugify = require("slugify");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx" && node.frontmatter.title !== "") {
    const slug = createFilePath({
      node,
      getNode,
      // basePath: "posts",
    });
    createNodeField({
      node,
      name: "slug",
      value: `${slug}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pagePaths = {
    blog: "./src/posts/PostPage.js",
    project: "./src/projects/ProjectPage.js",
  };
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(
          filter: {
            fileAbsolutePath: { ne: null }
            frontmatter: { date: { ne: null } }
          }
        ) {
          edges {
            node {
              frontmatter {
                type
              }
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMdx.edges.forEach(({ node }) => {
        try {
          if (node && node.frontmatter && node.frontmatter.type) {
            if (node.frontmatter.type === "project") return;
            createPage({
              path: node.slug,
              component: path.resolve(pagePaths[node.frontmatter.type]),
              context: {
                slug: node.slug,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      });
      resolve();
    });
  });
};
