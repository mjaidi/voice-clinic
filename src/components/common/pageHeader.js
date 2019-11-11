import React from "react"
import styled from "styled-components"
import { headerFont } from "../Layout/variables"

const PageHeader = props => (
  <PageHeaderStyled props={props}>
    <h1>{props.title}</h1>
    {props.children}
  </PageHeaderStyled>
)

const PageHeaderStyled = styled.section`
  background: linear-gradient(
      165deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(96, 96, 96, 0.3) 100%
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
  image:
    "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2690&q=80",
}

export default PageHeader
