import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Wrapper, Menu } from "./styles"

const NavbarLinks = ({ data, desktop, location }) => {
  const [activeMenu, setActiveMenu] = useState("")

  return (
    <Wrapper desktop={desktop}>
      <Link
        to="/services"
        className={
          location === "/services" ? "navbarLink active" : "navbarLink"
        }
        onMouseOver={event => setActiveMenu("services")}
      >
        Services
        <Menu
          desktop={desktop}
          className={activeMenu === "services" ? "active" : ""}
          onMouseOut={event => setActiveMenu("")}
        >
          {data.services.edges.map(e => {
            return (
              <li>
                <Link to={`services${e.node.fields.slug}`}>
                  {e.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </Menu>
      </Link>
      <Link
        to="/projects"
        className={
          location === "/projects" ? "navbarLink active" : "navbarLink"
        }
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={location === "/contact" ? "navbarLink active" : "navbarLink"}
      >
        Contact
      </Link>
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
