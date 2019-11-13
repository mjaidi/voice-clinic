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
        index === services.length - 1 ? null : services[index + 1].node
      const next = index === 0 ? null : services[index - 1].node

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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    """
    Markdown Node
    """
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }

    """
    Markdown Frontmatter
    """
    type Frontmatter @infer {
      seo_title: String!
      seo_description: String!
      categories: CategoriesJSON!
      banner_gallery: BannerGallery!
      title: String!
      description: String!
      email: String!
      icon: String!
      logo: String!
      phone: String!
      text: String!


    }
    """
    Banner  Gallery
    """
    type BannerGallery implements Node @dontInfer {
      title: String!
      subtitle: String!
      image: String!
    }

    """
    Categories
    """
    type CategoriesJSON implements Node @dontInfer {
      title: String!
      images: [String!]!
    }
  `
  createTypes(typeDefs)
}
