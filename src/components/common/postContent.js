import React, { Fragment } from "react"
import styled from "styled-components"

const Content = styled.div`
  padding: 2rem 0;
`

const PostContent = ({ introduction }) => (
  <Fragment>
    <Content dangerouslySetInnerHTML={{ __html: introduction }}></Content>
  </Fragment>
)

export default PostContent
