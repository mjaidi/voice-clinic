import React from "react"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby"
import { Wrapper } from "./styles"

const NavbarLinks = ({ desktop, location }) => (
  <Wrapper desktop={desktop}>
    <Link to="/services" className={location === "/services" ? "active" : ""}>
      Services
    </Link>
    <Link to="/projects" className={location === "/projects" ? "active" : ""}>
      Projects
    </Link>
    <Link to="/contact" className={location === "/contact" ? "active" : ""}>
      Contact
    </Link>
  </Wrapper>
)

export default NavbarLinks
