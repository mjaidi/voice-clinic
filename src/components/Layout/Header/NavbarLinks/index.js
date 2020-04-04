import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./styles"

const NavbarLinks = ({ desktop, location }) => {
  return (
    <Wrapper desktop={desktop}>
      <div className="navbarLink">
        <Link to="/" className={location === "/" ? " active" : ""}>
          Accueil
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          to="/contact"
          className={location === "/contact" ? " active" : ""}
        >
          Contactez Nous
        </Link>
      </div>
    </Wrapper>
  )
}

export default NavbarLinks
