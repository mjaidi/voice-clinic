import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import Carousel from "../components/Carousel"

import { About, Services } from "../page_styles/index_page"

const IndexPage = props => {
  const { data } = props
  const homePageData = data.home.nodes[0].frontmatter
  const aboutData = data.about.nodes[0].frontmatter
  const services = data.services.edges
  const carouselImgs = homePageData.banner_gallery.map(g => {
    return { headline: g.title, subline: g.subtitle, url: g.image }
  })
  return (
    <Layout location="/">
      <SEO
        title={homePageData.seo_title}
        description={homePageData.seo_description}
      />
      <Carousel images={carouselImgs} />
      <Container>
        <About>
          <div className="flex">
            <img src={aboutData.image} alt="about" />
            <div>
              <h2>{aboutData.title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutData.text,
                }}
              />
            </div>
          </div>
        </About>
      </Container>
      <Container color="#fee">
        <Services>
          <h2>Nos Services</h2>
          <div className="service-flex">
            {services.map(({ node }) => {
              return (
                <Link to={`services${node.fields.slug}`} key={node.fields.slug}>
                  <div className="service-card">
                    <img
                      src={node.frontmatter.icon}
                      alt={node.frontmatter.title}
                    />
                    <h4>{node.frontmatter.title}</h4>
                  </div>
                </Link>
              )
            })}
          </div>
        </Services>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    home: allMdx(
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
          seo_title
          seo_description
        }
      }
    }
    about: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/about.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          image
          text
          title
        }
      }
    }
    services: allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/services/" } } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
    }
  }
`
