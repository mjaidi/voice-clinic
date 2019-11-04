import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/common/button"
import Container from "../components/common/container"

import { HeaderWrapper } from "../page_styles/index_page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeaderWrapper>
      <Image name="facade" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </HeaderWrapper>
    <Container>
      <Link to="/projects/">
        <Button marginTop="20px">Go to Projects</Button>
      </Link>
    </Container>
  </Layout>
)

export default IndexPage
