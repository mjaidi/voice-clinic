import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"

const Contact = props => {
  return (
    <Layout location="/contact" title="Contact us">
      <PageHeader title="Contactez Nous"></PageHeader>

      <Container>
        <SEO title="All projects" />
        <section>This is the Contact us section </section>
      </Container>
    </Layout>
  )
}

export default Contact
