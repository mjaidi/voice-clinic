import React from "react"
import { Link, graphql, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"

import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import Container from "../components/common/container"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import PageHeader from "../components/common/pageHeader"
import CustomBreadcrumb from "../components/common/customBreadcrumb"
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

  const content = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(category.frontmatter.text)
    .toString()

  const isLoggedIn = firebase.auth().currentUser
  if (!isLoggedIn && category.frontmatter.needs_login) {
    navigate("/")
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <PageHeader
        title={category.frontmatter.title}
        image={category.frontmatter.icon}
        blog
      ></PageHeader>
      <CustomBreadcrumb crumbs={crumbs} crumbSeparator=" / " />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <Content>
          <Grid>
            {posts.map(p => (
              <GridItem lgColumns={2} margin={15}>
                <Link to={`posts${p.node.fields.slug}`}>
                  <PostsCard>
                    <img
                      src={p.node.frontmatter.featured_image}
                      alt={p.node.frontmatter.title}
                    />
                    <h4>{p.node.frontmatter.title}</h4>
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
            icon
            text
            needs_login
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
