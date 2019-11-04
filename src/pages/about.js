import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const About = props => {
  return (
    <Layout location="/about" title="About us">
      <SEO title="All projects" />
      <section>This is the about us section </section>
    </Layout>
  )
}

export default About
