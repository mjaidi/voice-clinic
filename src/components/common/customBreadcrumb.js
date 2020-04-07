import React from "react"
import styled from "styled-components"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { accentSecondary } from "../Layout/variables"

const CustomBreadcrumb = props => {
  console.log(props)
  return (
    <StyledBreadcrumb props={props}>
      <Breadcrumb crumbs={props.crumbs} crumbSeparator={props.crumbSepatator}>
        {props.children}
      </Breadcrumb>
    </StyledBreadcrumb>
  )
}

const StyledBreadcrumb = styled.div`
  padding: ${props => props.props.padding || "10px 0"};
  ol {
    list-style: none;
    display: inline-flex;
    li {
      margin: 0 10px;
      font-weight: bold;

      &:hover {
        color: ${accentSecondary};
      }
    }
  }
`
CustomBreadcrumb.defaultProps = {
  crumbs: [],
  crumbsSeparator: "/",
}

export default CustomBreadcrumb
