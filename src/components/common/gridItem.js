import React from "react"
import styled from "styled-components"

const widthMap = [100, 50, 33, 25, 20, 16.66, 14.27, 12.5, 11.1, 10]

const GridItem = props => (
  <GridItemStyled props={props}>{props.children}</GridItemStyled>
)

const GridItemStyled = styled.div`
  margin: ${props => props.props.margin}px;
  display: ${props => (props.props.hidden ? "none" : "block")};
  ${props =>
    props.props.lgColumns < widthMap.length + 1
      ? `width: calc(${widthMap[props.props.lgColumns - 1] *
          props.props.lgNbColumns}% - ${2 * props.props.margin}px);`
      : `width: calc(100% - ${2 * props.props.margin}px);`}
  @media (max-width: 900px) {
    ${props =>
      props.props.mdColumns < widthMap.length + 1
        ? `width: calc(${widthMap[props.props.mdColumns - 1] *
            props.props.mdNbColumns}% - ${2 * props.props.margin}px);`
        : `width: calc(100% - ${2 * props.props.margin}px);`}
  }
  @media (max-width: 600px) {
    ${props =>
      props.props.smColumns < widthMap.length + 1
        ? `width: calc(${widthMap[props.props.smColumns - 1] *
            props.props.smNbColumns}% - ${2 * props.props.margin}px);`
        : `width: calc(100% - ${2 * props.props.margin}px);`}
  }
  transition: width 0.9s linear;
`

GridItem.defaultProps = {
  lgColumns: 3,
  mdColumns: 2,
  smColumns: 1,
  margin: 10,
  lgNbColumns: 1,
  mdNbColumns: 1,
  smNbColumns: 1,
}
export default GridItem
