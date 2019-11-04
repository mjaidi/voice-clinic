import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"

const About = props => {
  return (
    <Layout location="/about" title="About us">
      <Container>
        <SEO title="All projects" />
        <section>This is the about us section </section>
      </Container>
    </Layout>
  )
}

export default About
