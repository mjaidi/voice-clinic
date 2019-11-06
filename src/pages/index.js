import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"
import Carousel from "../components/Carousel"

import facade from "../../content/assets/facade.jpg"
import umnia from "../../content/assets/umnia.jpg"

const IndexPage = () => {
  const carouselImgs = [
    {
      headline: "Falu Déco",
      subline: "Façadier, enseignes et ameublement",
      url: umnia,
    },
    {
      headline: "Falu Déco",
      subline: "spécialiste des façades et amménagement extérieur",
      url: facade,
    },
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel images={carouselImgs} />
      <Container>
        <Link to="/projects/">
          <Button marginTop="20px">Go to Projects</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default IndexPage
