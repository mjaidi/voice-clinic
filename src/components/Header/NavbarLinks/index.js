import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Wrapper, Menu } from "./styles"

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
          to="/services"
          className={location === "/services" ? " active" : ""}
          onMouseOver={event => setActiveMenu("services")}
        >
          Services
        </Link>
        <Menu
          desktop={desktop}
          className={activeMenu === "services" ? "active" : ""}
          onMouseLeave={event => setActiveMenu("")}
        >
          {data.services.edges.map((e, index) => {
            return (
              <li key={index}>
                <Link to={`services${e.node.fields.slug}`}>
                  {e.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </Menu>
      </div>
      <div className="navbarLink">
        <Link
          to="/projects"
          className={location === "/projects" ? " active" : ""}
        >
          Projets
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          to="/contact"
          className={location === "/contact" ? " active" : ""}
        >
          Demandez un Devis
        </Link>
      </div>
    </Wrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        services: allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/services/" } }
            }
          }
        ) {
          edges {
            node {
              excerpt
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
