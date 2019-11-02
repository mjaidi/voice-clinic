import React from "react"
import { Link } from "gatsby"
import NavbarLinks from "../NavbarLinks"
import { Wrapper } from "./styles"

const Navbar = () => (
  <Wrapper>
    <Link to="/">Home</Link>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
