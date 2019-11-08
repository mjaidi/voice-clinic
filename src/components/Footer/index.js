import React from "react"

import { Wrapper } from "./styles"

const Footer = props => {
  return (
    <Wrapper>
      <h4>© First Sign - {new Date().getFullYear()}</h4>
    </Wrapper>
  )
}

export default Footer
