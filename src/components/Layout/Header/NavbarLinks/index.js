import React, { useState } from "react"
import { Link } from "gatsby"
import { Wrapper, Menu } from "./styles"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarLinks = ({ data, desktop, location }) => {
  const [activeMenu, setActiveMenu] = useState("")

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
