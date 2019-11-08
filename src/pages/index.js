import React from "react"
import { Link, graphql } from "gatsby"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import TriangleClip from "../components/common/triangle_clip.js"
import Carousel from "../components/Carousel"
import CardCarousel from "../components/CardCarousel"
import Img from "gatsby-image"
import {
  About,
  Services,
  Instagram,
  Clients,
  Title,
} from "../page_styles/index_page"
import {
  accentSecondaryLight,
  accentMainLight,
} from "../components/Layout/variables"

const IndexPage = props => {
  const { data } = props
  const homePageData = data.home.nodes[0].frontmatter
  const aboutData = data.about.nodes[0].frontmatter
  const services = data.services.edges
  const clients = data.clients.nodes[0].frontmatter
  const instagram = data.insta.edges
  const carouselImgs = homePageData.banner_gallery.map(g => {
    return { headline: g.title, subline: g.subtitle, url: g.image }
  })
  const clientImgs = clients.client_gallery.map(c => c.logo)

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
              <Title>{aboutData.title}</Title>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutData.text,
                }}
              />
            </div>
          </div>
        </About>
      </Container>
      <TriangleClip color={accentSecondaryLight} />
      <Container color={accentSecondaryLight}>
        <Services>
          <Title>Nos Services</Title>
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
      <TriangleClip color={accentSecondaryLight} direction="bottom" />
      <Container>
        <Instagram>
          <LightgalleryProvider>
            <Title>Nouveautés</Title>
            <div className="insta-flex">
              {instagram.map(i => {
                return (
                  <div class="insta-card">
                    <LightgalleryItem
                      src={i.node.localFile.childImageSharp.fixed.src}
                    >
                      <Img fixed={i.node.localFile.childImageSharp.fixed} />
                    </LightgalleryItem>
                    <p>{i.node.caption}</p>
                  </div>
                )
              })}
            </div>
          </LightgalleryProvider>
        </Instagram>
      </Container>
      <TriangleClip color={accentMainLight} />
      <Container color={accentMainLight}>
        <Clients>
          <Title>Nos Clients</Title>

          <CardCarousel images={clientImgs} />
        </Clients>
      </Container>
      <TriangleClip color={accentMainLight} direction="bottom" />
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
    insta: allInstaNode {
      edges {
        node {
          caption
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    clients: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/clients.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          client_gallery {
            logo
            nom
          }
        }
      }
    }
  }
`
