import React from "react"
import { Link, graphql, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"

import CustomBreadcrumb from "../components/common/customBreadcrumb"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import { PostLinks } from "../template_styles/posts_template"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostContent from "../components/common/postContent"

const PostDetail = props => {
  const post = props.data.posts.edges[0].node
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const category = props.data.categories.edges.find(
    c => c.node.frontmatter.title === post.frontmatter.category
  )
  const crumbs = [
    { pathname: "/", crumbLabel: "Acceuil" },
    {
      pathname: `/categories${category.node.fields.slug}`,
      crumbLabel: `${category.node.frontmatter.title}`,
    },
    {
      pathname: `/posts${props.pageContext.slug}`,
      crumbLabel: `${post.frontmatter.title}`,
    },
  ]
  if (typeof window !== "undefined") {
    const isLoggedIn = firebase.auth().currentUser
    if (!isLoggedIn && post.frontmatter.needs_login) {
      navigate("/")
    }
  }
  return (
    <Layout location={props.location} title={siteTitle}>
      <PageHeader
        title={post.frontmatter.title}
        image={post.frontmatter.featured_image}
        blog
      ></PageHeader>
      <CustomBreadcrumb crumbs={crumbs} crumbSeparator=" / " />

      <SEO
        title={post.frontmatter.seo_title}
        description={post.frontmatter.seo_description}
      />
      <PostContent sections={post.frontmatter.sections} />
      <Container>
        <PostLinks>
          <li>
            {previous && (
              <Link to={`posts${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`posts${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PostLinks>
      </Container>
    </Layout>
  )
}

export default PostDetail

export const pageQuery = graphql`
  query postDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          frontmatter {
            seo_title
            seo_description
            title
            featured_image
            category
            needs_login
            sections {
              title
              text
              video
              video_title
              downloads {
                title
                description
                document_pdf
              }
              faq {
                question
                answer
              }
            }
          }
        }
      }
    }
    categories: allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/categories/" } } }
      }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
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
