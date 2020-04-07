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
      {data.categories.edges.map(c => {
        const posts = data.posts.edges.filter(
          p => p.node.frontmatter.category === c.node.frontmatter.title
        )
        return (
          <div className="navbarLink">
            <Link
              to={`categories${c.node.fields.slug}`}
              onMouseOver={event =>
                setActiveMenu(`categories${c.node.fields.slug}`)
              }
              onFocus={event =>
                setActiveMenu(`categories${c.node.fields.slug}`)
              }
              className={
                location &&
                location.pathname &&
                location.pathname.match(`categories${c.node.fields.slug}`)
                  ? " active"
                  : ""
              }
            >
              {c.node.frontmatter.title}
            </Link>
            <FontAwesomeIcon
              icon={faCaretDown}
              onClick={event =>
                setActiveMenu(`categories${c.node.fields.slug}`)
              }
            />
            <Menu
              desktop={desktop}
              className={
                activeMenu === `categories${c.node.fields.slug}` ? "active" : ""
              }
              onMouseLeave={event => setActiveMenu("")}
            >
              {posts.map((pi, index) => {
                return (
                  <li key={index}>
                    <Link to={`posts${pi.node.fields.slug}`}>
                      {pi.node.frontmatter.title}
                    </Link>
                  </li>
                )
              })}
            </Menu>
          </div>
        )
      })}
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
        posts: allMdx(
          filter: {
            parent: { internal: { description: { regex: "/content/posts/" } } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
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
