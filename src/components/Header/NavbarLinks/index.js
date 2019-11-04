import React from "react"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby"
import { Wrapper } from "./styles"

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </Wrapper>
)

export default NavbarLinks
