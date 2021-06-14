const path = require("path");
const _ = require("lodash");
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
    posts: "./src/templates/postPage.js",
    tag: "./src/templates/tags.js",
  };

  const templatePaths = {
    blogPostTemplate: path.resolve(pagePaths.posts),
    tagTemplate: path.resolve(pagePaths.tag),
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
        tagsGroup: allMdx {
          group(field: frontmatter___tags) {
            totalCount
            fieldValue
          }
        }
      }
    `).then((result) => {
      result.data.allMdx.edges.forEach(({ node }) => {
        const docType = node.slug.split("/")[0];
        try {
          if (node && node.frontmatter && docType) {
            if (docType === "project" || docType === "notes") return;
            createPage({
              path: node.slug,
              component: path.resolve(pagePaths[docType]),
              context: {
                slug: node.slug,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      });

      // Extract tag data from query
      const tags = result.data.tagsGroup.group;
      // Make tag pages
      tags.forEach((tag) => {
        createPage({
          path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
          component: templatePaths.tagTemplate,
          context: {
            tag: tag.fieldValue,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@constants": path.resolve(__dirname, "src/constants"),
      },
    },
  });
};
