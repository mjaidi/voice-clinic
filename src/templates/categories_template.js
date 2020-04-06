import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import { Content } from "../template_styles/categories_template"
import Layout from "../components/Layout"

const CategoryDetailTemplate = props => {
  const category = props.data.categories.edges[0].node
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <PageHeader title={category.frontmatter.title}></PageHeader>

      <Container>
        <Content>
          <Link to="/">Accueil</Link>
        </Content>
      </Container>
    </Layout>
  )
}

export default CategoryDetailTemplate

export const pageQuery = graphql`
  query categoryDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    categories: allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          frontmatter {
            seo_title
            seo_description
            title
            content
            featured_image
            category
          }
        }
      }
    }
  }
`
