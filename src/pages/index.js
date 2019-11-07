import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"
import Carousel from "../components/Carousel"

const IndexPage = props => {
  const { data } = props
  const homePageData = data.allMdx.nodes[0].frontmatter
  const carouselImgs = homePageData.banner_gallery.map(g => {
    return { headline: g.title, subline: g.subtitle, url: g.image }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel images={carouselImgs} />
      <Container>
        <Link to="/projects/">
          <Button marginTop="20px">Go to Projects</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/home.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          banner_gallery {
            image
            subtitle
            title
          }
          logo
          seo_title
          seo_description
        }
      }
    }
  }
`
