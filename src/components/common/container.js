import React from "react"
import styled from "styled-components"

const Container = props => (
  <ContainerStyled props={props}>{props.children}</ContainerStyled>
)

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

export default Container
