const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postDetail = path.resolve(`./src/templates/posts_template.js`)
  const categoryDetail = path.resolve(`./src/templates/categories_template.js`)
  return graphql(
    `
      {
        posts: allMdx(
          filter: {
            parent: { internal: { description: { regex: "/content/posts/" } } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        categories: allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/categories/" } }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create post posts pages.
    const posts = result.data.posts.edges
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? posts[0].node : posts[index + 1].node
      const next =
        index === 0 ? posts[posts.length - 1].node : posts[index - 1].node

      createPage({
        path: `posts${post.node.fields.slug}`,
        component: postDetail,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    // Create categories pages.
    const categories = result.data.categories.edges
    categories.forEach(categorie => {
      createPage({
        path: `categories${categorie.node.fields.slug}`,
        component: categoryDetail,
        context: {
          slug: categorie.node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
