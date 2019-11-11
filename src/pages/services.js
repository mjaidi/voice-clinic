import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/pageHeader"
import Button from "../components/common/button"
import { ServicesWrapper, ServicesCard } from "../page_styles/services"
import {
  accentSecondary,
  accentSecondaryLight,
  background,
} from "../components/Layout/variables"
import TriangleClip from "../components/common/triangle_clip.js"

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
      <SEO title="Nos Services" />
      <ServicesWrapper>
        {services.map((p, index) => {
          const title = p.node.frontmatter.title || p.node.fields.slug
          return (
            <div>
              {index !== 0 && (
                <TriangleClip
                  color={index % 2 === 1 ? accentSecondaryLight : background}
                ></TriangleClip>
              )}
              <ServicesCard
                key={p.node.fields.slug}
                background={index % 2 === 1 ? accentSecondaryLight : background}
              >
                <img
                  src={p.node.frontmatter.image}
                  alt={p.node.frontmatter.title}
                  class={index % 2 === 0 ? "show top" : "hide top"}
                ></img>
                <div className="services-content">
                  <h3
                    style={{
                      marginBottom: 15,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: p.node.frontmatter.description,
                    }}
                  />
                  <Link to={`services${p.node.fields.slug}`}>
                    <Button background={accentSecondary}>
                      En savoir plus...
                    </Button>
                  </Link>
                </div>
                <img
                  src={p.node.frontmatter.image}
                  alt={p.node.frontmatter.title}
                  class={index % 2 === 1 ? "show bottom" : "hide bottom"}
                ></img>
              </ServicesCard>
              {index !== services.length - 1 && (
                <TriangleClip
                  color={index % 2 === 1 ? accentSecondaryLight : background}
                  direction="bottom"
                ></TriangleClip>
              )}
            </div>
          )
        })}
      </ServicesWrapper>
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
            image
          }
        }
      }
    }
  }
`
