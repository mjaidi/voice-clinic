import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faAt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons"

import { ContactInfo } from "./styles"

const ContactWrapper = ({ data }) => {
  const contact = data.contact.nodes[0].frontmatter
  return (
    <ContactInfo>
      <div className="content">
        <FontAwesomeIcon icon={faPhone} />
        {contact.phone}
      </div>
      <div className="content">
        <FontAwesomeIcon icon={faAt} />
        {contact.email}
      </div>

      <div className="content">
        <FontAwesomeIcon icon={faLocationArrow} />
        {contact.address}
      </div>
    </ContactInfo>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
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
              email
              address
            }
          }
        }
      }
    `}
    render={data => (
      <ContactWrapper data={data} location={props.location} {...props} />
    )}
  />
)
