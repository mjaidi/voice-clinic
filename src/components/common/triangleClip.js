import React from "react"
import styled from "styled-components"
import texture from "../../../content/assets/brick-wall.png"

const TriangleClip = props => (
  <TriangleClipStyled props={props}>{props.children}</TriangleClipStyled>
)

const TriangleClipStyled = styled.div`
  background-color: ${props => props.props.color};
  background-image: url(${props => (props.props.textured ? texture : "")});
  background-size: 200px;

  height: ${props => props.props.height || 5}rem;
  transform: ${props =>
    props.props.direction === "bottom" ? "" : "scaleY(-1)"};
  filter: ${props => (props.props.direction === "bottom" ? "" : "FlipV")};

  clip-path: ${props =>
    props.props.direction === "bottom"
      ? "polygon(0 0, 100% 100%, 100% 0)"
      : "polygon(0 0, 0% 100%, 100% 0)"};
`

export default TriangleClip
