import React from "react"
import { Link, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"

import { About, ProjetsPhares, Title } from "../page_styles/index_page"

const IndexPage = props => {
  const homePageData = props.data.home.nodes[0].frontmatter
  const aboutData = props.data.about.nodes[0].frontmatter
  const aboutText = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(aboutData.text)
    .toString()

  return (
    <Layout location="/">
      <SEO
        title={homePageData.seo_title}
        description={homePageData.seo_description}
      />
      <PageHeader title="Clinique des voix"></PageHeader>

      {/* Our History Section */}
      <Container>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <About>
            <Grid>
              <GridItem lgColumns={10} lgNbColumns={4} margin={15}>
                <img src={aboutData.image} alt="about" />
              </GridItem>
              <GridItem lgColumns={10} lgNbColumns={6} margin={15}>
                <Title>{aboutData.title}</Title>
                <div dangerouslySetInnerHTML={{ __html: aboutText }} />
              </GridItem>
            </Grid>
          </About>
        </ScrollAnimation>
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
          our_team {
            image
            title
          }
          image
          text
          title
        }
      }
    }
  }
`
