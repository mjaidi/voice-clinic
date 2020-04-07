import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Wrapper, Menu } from "./styles"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarLinks = ({ data, desktop, location }) => {
  const [activeMenu, setActiveMenu] = useState("")
  console.log(location)
  return (
    <Wrapper desktop={desktop}>
      <div className="navbarLink">
        <Link to="/" className={location === "/" ? " active" : ""}>
          Accueil
        </Link>
      </div>
      <div className="navbarLink">
        <a
          href="#"
          onMouseOver={event => setActiveMenu("categories")}
          onFocus={event => setActiveMenu("categories")}
          className={
            location &&
            location.pathname &&
            location.pathname.match(/[posts|categories]/)
              ? " active"
              : ""
          }
        >
          Self Help
        </a>
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={event => setActiveMenu("categories")}
        />
        <Menu
          desktop={desktop}
          className={activeMenu === "categories" ? "active" : ""}
          onMouseLeave={event => setActiveMenu("")}
        >
          {data.categories.edges.map((e, index) => {
            return (
              <li key={index}>
                <Link to={`categories${e.node.fields.slug}`}>
                  {e.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </Menu>
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        categories: allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/categories/" } }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <NavbarLinks data={data} location={props.location} {...props} />
    )}
  />
)
