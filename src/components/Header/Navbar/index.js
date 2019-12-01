import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import NavbarLinks from "../NavbarLinks"
import { Wrapper, Logo, PhoneNumber } from "./styles"

const Navbar = ({ data, location }) => (
  <Wrapper>
    <Link to="/">
      <Logo src={data.home.nodes[0].frontmatter.logo} alt="logo" />
    </Link>
    <NavbarLinks desktop location={location} />
    <PhoneNumber>
      <FontAwesomeIcon icon={faPhone} />

      <a
        href={
          "tel: +" +
          data.contact.nodes[0].frontmatter.phone_call.replace(/\D/g, "")
        }
      >
        {" "}
        {data.contact.nodes[0].frontmatter.phone}
      </a>
    </PhoneNumber>
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
