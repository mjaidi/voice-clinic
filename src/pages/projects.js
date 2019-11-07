import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"

const Project = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
        <SEO title="All projects" />
        <div style={{ margin: "20px 0 40px" }}>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: 15,
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`projects${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/projects/" } } }
      }
    ) {
      edges {
        node {
          excerpt
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
