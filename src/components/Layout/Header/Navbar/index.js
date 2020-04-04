import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import NavbarLinks from "../NavbarLinks"
import { Wrapper, Logo } from "./styles"

const Navbar = ({ data, location }) => (
  <Wrapper>
    <Link to="/">
      <Logo src={data.home.nodes[0].frontmatter.logo} alt="logo" />
    </Link>
    <NavbarLinks desktop location={location} />
  </Wrapper>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        home: allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/home/home.md/" } }
            }
          }
        ) {
          nodes {
            frontmatter {
              logo
            }
          }
        }
        contact: allMdx(
          filter: {
            parent: {
              internal: { description: { regex: "/content/home/contact.md/" } }
            }
          }
        ) {
          nodes {
            frontmatter {
              phone
              phone_call
            }
          }
        }
      }
    `}
    render={data => <Navbar data={data} location={props.location} {...props} />}
  />
)
