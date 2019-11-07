import React from "react"
import styled from "styled-components"

const Container = props => (
  <ContainerStyled props={props}>
    <div className="inner-container">{props.children}</div>
  </ContainerStyled>
)

const ContainerStyled = styled.section`
  background-color: ${props => props.props.color};
  .inner-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  }
`

export default Container
