import React from "react"
import { Link, graphql } from "gatsby"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import TriangleClip from "../components/common/triangleClip.js"
import Carousel from "../components/Carousel"
import Img from "gatsby-image"
import {
  About,
  Services,
  Instagram,
  Clients,
  Title,
} from "../page_styles/index_page"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"

const IndexPage = props => {
  const { data } = props
  const homePageData = data.home.nodes[0].frontmatter
  const aboutData = data.about.nodes[0].frontmatter
  const services = data.services.edges
  const clients = data.clients.nodes[0].frontmatter
  const instagram = data.insta.edges.filter(i => i.node.localFile !== null)
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
          <Grid>
            <GridItem lgColumns={10} lgNbColumns={4} margin={15}>
              <img src={aboutData.image} alt="about" />
            </GridItem>
            <GridItem lgColumns={10} lgNbColumns={6} margin={15}>
              <Title>{aboutData.title}</Title>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutData.text,
                }}
              />
            </GridItem>
          </Grid>
        </About>
      </Container>
      <TriangleClip textured />
      <Container textured>
        <Services>
          <Title>Nos Services</Title>
          <Grid>
            {services.map(({ node }) => {
              return (
                <GridItem lgColumns={2} mdColumns={1} key={node.fields.slug}>
                  <Link to={`services${node.fields.slug}`}>
                    <div className="service-card">
                      <Grid>
                        <GridItem lgColumns={2}>
                          <img
                            src={node.frontmatter.icon}
                            alt={node.frontmatter.title}
                          />
                          <h4>{node.frontmatter.title}</h4>
                        </GridItem>
                        <GridItem lgColumns={2}>
                          {node.frontmatter.categories.map(c => (
                            <p key={c.title}>{c.title}</p>
                          ))}
                        </GridItem>
                      </Grid>
                    </div>
                  </Link>
                </GridItem>
              )
            })}
          </Grid>
        </Services>
      </Container>
      <TriangleClip direction="bottom" textured />
      <Container>
        <Instagram>
          <LightgalleryProvider>
            <Title>Nouveautés</Title>
            <Grid>
              {instagram.map((i, index) => {
                return (
                  <GridItem key={index}>
                    <div className="insta-card">
                      <LightgalleryItem
                        group="all"
                        src={i.node.localFile.childImageSharp.fixed.src}
                      >
                        <Img fixed={i.node.localFile.childImageSharp.fixed} />
                        <div className="overlay">
                          <p>{i.node.caption}</p>
                        </div>
                      </LightgalleryItem>
                    </div>
                  </GridItem>
                )
              })}
            </Grid>
          </LightgalleryProvider>
        </Instagram>
      </Container>
      <TriangleClip textured />
      <Container textured>
        <Clients>
          <Title>Nos Clients</Title>
          <Grid justifyContent="left">
            {clients.client_gallery.map((c, index) => (
              <GridItem
                lgColumns={7}
                mdColumns={5}
                smColumns={3}
                key={JSON.stringify(c.logo)}
              >
                <img src={c.logo} alt={c.name}></img>
              </GridItem>
            ))}
          </Grid>
        </Clients>
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
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
            categories {
              title
            }
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
            name
          }
        }
      }
    }
  }
`
