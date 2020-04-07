import React from "react"
import { Link, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import Container from "../components/common/container"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import PageHeader from "../components/common/pageHeader"
import { Content, PostsCard } from "../template_styles/categories_template"
import Layout from "../components/Layout"

const CategoryDetailTemplate = props => {
  const category = props.data.categories.edges[0].node
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.posts.edges.filter(
    p => p.node.frontmatter.category === category.frontmatter.title
  )

  const crumbs = [
    { pathname: "/", crumbLabel: "Acceuil" },
    {
      pathname: `/categories${props.pageContext.slug}`,
      crumbLabel: `${category.frontmatter.title}`,
    },
  ]

  console.log(props.pageContext, crumbs)
  return (
    <Layout location={props.location} title={siteTitle}>
      <PageHeader title={category.frontmatter.title}></PageHeader>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
      <Container>
        <Content>
          <Grid>
            {posts.map(p => (
              <GridItem lgColumns={2} margin={15}>
                <Link to={`posts${p.node.fields.slug}`}>
                  <PostsCard>
                    <img src={p.node.frontmatter.featured_image} alt="image" />
                    <p>{p.node.frontmatter.title}</p>
                  </PostsCard>
                </Link>
              </GridItem>
            ))}
          </Grid>
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
          }
        }
      }
    }
    posts: allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/posts/" } } }
      }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            featured_image
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
