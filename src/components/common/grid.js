import React from "react"
import styled from "styled-components"

const Grid = props => <GridStyled props={props}>{props.children}</GridStyled>

const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.props.justifyContent || "center"};
  align-items: ${props => props.props.alignItems || "center"};
`

export default Grid
