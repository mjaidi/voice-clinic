import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"

import contactTitleImg from "../../content/assets/mindefulness.svg"

const Contact = props => {
  return (
    <Layout location="/contact" title="Contactez Nous">
      <PageHeader title="Contactez Nous" image={contactTitleImg}></PageHeader>

      <Container paddingTop="3rem">
        <SEO title="Contactez Nous" />

        <Grid>
          <GridItem lgColumns={6} lgNbColumns={2}>
            <ContactInfo />
          </GridItem>
          <GridItem lgColumns={6} lgNbColumns={4}>
            <ContactForm location={props.location} />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Contact
