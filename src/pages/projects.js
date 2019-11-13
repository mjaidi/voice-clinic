import React, { useState } from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import PageHeader from "../components/common/pageHeader"
import { ProjectCard } from "../page_styles/projects"

const Project = props => {
  const [expandCard, setExpandCard] = useState({ cardIndex: 0, status: false })
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
        <SEO title="Tous nos projets" description="Liste de nos projets" />
        <Grid>
          {projects.map((p, index) => {
            const title = p.node.frontmatter.title || p.node.fields.slug
            return (
              <GridItem
                key={p.node.fields.slug}
                lgColumns={2}
                mdColumns={2}
                margin={20}
              >
                <ProjectCard
                  show={expandCard.cardIndex === index && expandCard.status}
                >
                  <img
                    src={p.node.frontmatter.image}
                    alt={p.node.frontmatter.title}
                  />
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
          }
        }
      }
    }
  }
`
