import React from "react"
import styled from "styled-components"
import { headerFont, smBreakpoint } from "../Layout/variables"
import defaultImg from "../../../content/assets/mindefulness.svg"

const PageHeader = props => (
  <PageHeaderStyled props={props}>
    <h1>{props.title}</h1>
    {props.children}
  </PageHeaderStyled>
)

const PageHeaderStyled = styled.section`
  background: ${props =>
    props.props.blog
      ? `linear-gradient(
      165deg,
      rgba(200, 200, 200, 0.5) 0%,
      rgba(225, 225, 225, 0.5) 100%
    ),
    url(${props.props.image});`
      : `linear-gradient(
      165deg,
      rgba(200, 200, 200, 0.3) 0%,
      rgba(225, 225, 225, 0.3) 100%
    ),
    url(${props.props.image});`}

  width: 100%;
  height: ${props => (props.props.blog ? "400px" : "300px")};
  position: relative;
  background-size: ${props => (props.props.blog ? "contain" : "cover")};
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
  @media (max-width: ${smBreakpoint}) {
    height: 300px;
  }
`

PageHeader.defaultProps = {
  title: "Titre",
  image: defaultImg,
}

export default PageHeader
