import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"

const Services = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const services = data.allMdx.edges

  return (
    <Layout location="/services" title={siteTitle}>
      <PageHeader
        title="Nos Services"
        image="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      ></PageHeader>
      <Container>
        <SEO title="Nos Services" />
        <div style={{ margin: "20px 0 40px" }}>
          {services.map(({ node }) => {
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
                    to={`services${node.fields.slug}`}
                  >
                    {title}
                  </Link>
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

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/services/" } } }
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
            description
          }
        }
      }
    }
  }
`
