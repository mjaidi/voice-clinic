import React, { useState } from "react"
import { graphql } from "gatsby"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import PageHeader from "../components/common/pageHeader"
import { ProjectCard } from "../page_styles/projects"

import projectsTitleImg from "../../content/assets/projects.jpeg"

const Project = props => {
  const [expandCard, setExpandCard] = useState({ cardIndex: 0, status: false })
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMdx.edges

  return (
    <Layout location="/projects" title={siteTitle}>
      <PageHeader title="Nos Projets" image={projectsTitleImg}></PageHeader>

      <Container>
        <SEO title="Tous nos projets" description="Liste de nos projets" />
        <Grid>
          {projects.map((p, index) => {
            const title = p.node.frontmatter.title || p.node.fields.slug
            return (
              <GridItem
                key={p.node.fields.slug}
                lgColumns={
                  expandCard.cardIndex === index && expandCard.status ? 1 : 2
                }
                mdColumns={
                  expandCard.cardIndex === index && expandCard.status ? 1 : 2
                }
                margin={20}
              >
                <ScrollAnimation
                  animateIn="fadeIn"
                  duration={2}
                  animateOnce={true}
                >
                  <ProjectCard
                    show={expandCard.cardIndex === index && expandCard.status}
                  >
                    <img
                      src={p.node.frontmatter.image}
                      alt={p.node.frontmatter.title}
                    />

                    <h3>{title}</h3>
                    {expandCard.cardIndex === index && expandCard.status && (
                      <LightgalleryProvider>
                        <Grid>
                          {p.node.frontmatter.project_gallery.map(
                            (i, index) => (
                              <GridItem
                                lgColumns={6}
                                mdColumns={4}
                                smColumns={3}
                                key={index}
                                hidden={index > 5}
                              >
                                <LightgalleryItem group="all" src={i.image}>
                                  <img
                                    src={i.image}
                                    alt={p.node.frontmatter.title}
                                    class="gallery-img"
                                  />
                                </LightgalleryItem>
                              </GridItem>
                            )
                          )}
                        </Grid>
                      </LightgalleryProvider>
                    )}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: remark()
                          .use(recommended)
                          .use(remarkHtml)
                          .processSync(p.node.frontmatter.description)
                          .toString(),
                      }}
                    />
                    <h5
                      className="expand"
                      onClick={event =>
                        setExpandCard({ cardIndex: index, status: true })
                      }
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                      Voir plus
                    </h5>
                    <h5
                      className="contract"
                      onClick={event =>
                        setExpandCard({ cardIndex: index, status: false })
                      }
                    >
                      <FontAwesomeIcon icon={faCaretUp} />
                      Voir moins
                    </h5>
                  </ProjectCard>
                </ScrollAnimation>
              </GridItem>
            )
          })}
        </Grid>
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
            image
            project_gallery {
              image
            }
          }
        }
      }
    }
  }
`
