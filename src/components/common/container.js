import React from "react"
import styled from "styled-components"
import texture from "../../../content/assets/bright-squares.png"
const Container = props => (
  <ContainerStyled props={props}>
    <div className="inner-container">{props.children}</div>
  </ContainerStyled>
)

const ContainerStyled = styled.section`
  background-color: ${props => props.props.color};
  background-image: url(${props => (props.props.textured ? texture : "")});
  .inner-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: ${props => props.props.paddingTop || "0"};
  }
`

export default Container
