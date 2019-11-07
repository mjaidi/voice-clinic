import React from "react"
import styled from "styled-components"

const TopClip = props => (
  <TopClipStyled props={props}>{props.children}</TopClipStyled>
)

const TopClipStyled = styled.div`
  background-color: ${props => props.props.color};
  height: ${props => props.props.height || 5}rem;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
`

export default TopClip
