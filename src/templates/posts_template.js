import React from "react"
import { Link, graphql } from "gatsby"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

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
  const introduction = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(post.frontmatter.introduction)
    .toString()
  const instructions = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(post.frontmatter.instructions)
    .toString()
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
      <PostContent
        introduction={introduction}
        instructions={instructions}
        video_title={post.frontmatter.video_title}
        video={post.frontmatter.video}
        faq={post.frontmatter.faq}
        worksheets={post.frontmatter.worksheets}
      />
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
            introduction
            featured_image
            category
            instructions
            video
            video_title
            worksheets {
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
