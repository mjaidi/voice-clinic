import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/common/container"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import LoginForm from "../components/LoginForm"
import { accentMainLight } from "../components/Layout/variables"

const Connexion = props => {
  return (
    <Layout location="/login" title="Connexion">
      <Container paddingTop="4rem" minHeight="100vh" color={accentMainLight}>
        <SEO title="Connexion" />

        <Grid>
          <GridItem lgColumns={6} lgNbColumns={3}>
            <LoginForm />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Connexion
