import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"

import Container from "../components/common/container"
import Masonry from "react-masonry-component"
import { GalleryItem } from "../template_styles/service-detail"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "lightgallery.js/dist/css/lightgallery.css"

const ServiceDetailTemplate = props => {
  const service = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  let allImgs = []
  for (const cat of service.frontmatter.categories) {
    for (const img of cat.images) {
      allImgs.push({ image: img, category: cat.title })
    }
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <LightgalleryProvider>
        <Container>
          <SEO
            title={service.frontmatter.title}
            description={service.frontmatter.description || service.excerpt}
          />
          <h1>{service.frontmatter.title}</h1>
          <Masonry>
            {allImgs.map((i, index) => {
              return (
                <GalleryItem key={index}>
                  <LightgalleryItem group="any" src={i.image}>
                    <img src={i.image} alt={i.category} />
                  </LightgalleryItem>
                </GalleryItem>
              )
            })}
          </Masonry>
          <p
            style={{
              display: `block`,
              marginBottom: 2,
              marginTop: -1,
            }}
          >
            {service.frontmatter.date}
          </p>
          <MDXRenderer>{service.body}</MDXRenderer>
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
                <Link to={`services${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`services${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </LightgalleryProvider>
    </Layout>
  )
}

export default ServiceDetailTemplate

export const pageQuery = graphql`
  query serviceDetailBySlug($slug: String!) {
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
        description
        image
        categories {
          title
          images
        }
      }
    }
  }
`
