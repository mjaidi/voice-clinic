import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"

const Project = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMdx.edges

  return (
    <Layout location="/projects" title={siteTitle}>
      <PageHeader
        title="Nos Projets"
        image="https://images.unsplash.com/photo-1558464678-2f1570e8d60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80"
      ></PageHeader>

      <Container>
        <SEO title="Tous nos projets" />
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
                  {title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description,
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
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
