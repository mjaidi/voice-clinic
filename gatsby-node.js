const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceDetail = path.resolve(`./src/templates/service-detail.js`)
  return graphql(
    `
      {
        allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/services/" } }
            }
          }
          sort: { order: ASC, fields: frontmatter___order }
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

    // Create service services pages.
    const services = result.data.allMdx.edges
    console.log(result)
    services.forEach((service, index) => {
      const previous =
        index === services.length - 1
          ? services[0].node
          : services[index + 1].node
      const next =
        index === 0
          ? services[services.length - 1].node
          : services[index - 1].node

      createPage({
        path: `services${service.node.fields.slug}`,
        component: serviceDetail,
        context: {
          slug: service.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
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
