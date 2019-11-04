import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ProjectDetailTemplate = props => {
  const project = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  console.log(project.frontmatter.gallerie)
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <h1>{project.frontmatter.title}</h1>
      {project.frontmatter.gallerie.map((i, index) => {
        return (
          <div key={index}>
            <img src={i.image} alt={i.name} />
          </div>
        )
      })}
      <p
        style={{
          display: `block`,
          marginBottom: 2,
          marginTop: -1,
        }}
      >
        {project.frontmatter.date}
      </p>
      <MDXRenderer>{project.body}</MDXRenderer>
      <hr
        style={{
          marginBottom: 2,
        }}
      />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectDetailTemplate

export const pageQuery = graphql`
  query ProjectDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        text
        gallerie {
          image
          nom
        }
      }
    }
  }
`
