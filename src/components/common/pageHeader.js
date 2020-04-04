import React from "react"
import styled from "styled-components"
import { headerFont } from "../Layout/variables"
import defaultImg from "../../../content/assets/mindefulness.svg"

const PageHeader = props => (
  <PageHeaderStyled props={props}>
    <h1>{props.title}</h1>
    {props.children}
  </PageHeaderStyled>
)

const PageHeaderStyled = styled.section`
  background: linear-gradient(
      165deg,
      rgba(200, 200, 200, 0.3) 0%,
      rgba(225, 225, 225, 0.3) 100%
    ),
    url(${props => props.props.image});
  width: 100%;
  height: 300px;
  position: relative;
  background-size: cover;
  background-position: center;
  h1 {
    position: absolute;
    top: 30%;
    text-align: center;
    font-size: 40px;
    font-family: ${headerFont};
    width: 100%;
    color: white;
    text-transform: uppercase;
  }
`

PageHeader.defaultProps = {
  title: "Titre",
  image: defaultImg,
}

export default PageHeader
