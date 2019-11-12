import React from "react"
import styled from "styled-components"
import texture from "../../../content/assets/bright-squares.png"

const TriangleClip = props => (
  <TriangleClipStyled props={props}>{props.children}</TriangleClipStyled>
)

const TriangleClipStyled = styled.div`
  background-color: ${props => props.props.color};
  background-image: url(${props => (props.props.textured ? texture : "")});

  height: ${props => props.props.height || 5}rem;
  clip-path: ${props =>
    props.props.direction === "bottom"
      ? "polygon(0 0, 100% 100%, 100% 0)"
      : "polygon(0 0, 0% 100%, 100% 100%)"};
`

export default TriangleClip
