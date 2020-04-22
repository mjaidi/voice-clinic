import React, { useState } from "react"
import { Link, StaticQuery, graphql, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { Wrapper, Menu } from "./styles"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarLinks = ({ data, desktop, location }) => {
  const [activeMenu, setActiveMenu] = useState("")
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/")
      })
  }
  const isLoggedIn = firebase.auth().currentUser
  const activeCategories = data.categories.edges.filter(
    c => !c.node.frontmatter.needs_login || isLoggedIn
  )
  return (
    <Wrapper desktop={desktop}>
      <div className="navbarLink">
        <Link to="/" className={location === "/" ? " active" : ""}>
          Qui Sommes Nous
        </Link>
      </div>
      {activeCategories.map((c, i) => {
        const posts = data.posts.edges.filter(
          p =>
            p.node.frontmatter.category === c.node.frontmatter.title &&
            (!p.node.frontmatter.needs_login || isLoggedIn)
        )
        return (
          <div className="navbarLink" key={i}>
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
          Contact
        </Link>
      </div>
      {!isLoggedIn && (
        <div className="navbarLink">
          <Link to="/login" className={location === "/login" ? " active" : ""}>
            Connexion
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="navbarLink">
          <a href onClick={handleLogout}>
            Se déconnécter
          </a>
        </div>
      )}
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
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                needs_login
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
                needs_login
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
