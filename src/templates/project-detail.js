import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"

import Container from "../components/common/container"
import Masonry from "react-masonry-component"
import { GalleryItem } from "../template_styles/project-detail"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "lightgallery.js/dist/css/lightgallery.css"

const ProjectDetailTemplate = props => {
  const project = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <LightgalleryProvider>
        <Container>
          <SEO
            title={project.frontmatter.title}
            description={project.frontmatter.description || project.excerpt}
          />
          <h1>{project.frontmatter.title}</h1>
          <Masonry>
            <GalleryItem>
              <LightgalleryItem group="any" src={project.frontmatter.image}>
                <img src={project.frontmatter.image} alt="new" />
              </LightgalleryItem>
            </GalleryItem>
          </Masonry>
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
                <Link to={`projects${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`projects${next.fields.slug}`} rel="next">
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
        description
        image
      }
    }
  }
`
