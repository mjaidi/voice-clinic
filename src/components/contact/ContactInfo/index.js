import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faAt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons"

import { ContactInfo } from "./styles"
import Grid from "../../common/grid"
import GridItem from "../../common/gridItem"

const ContactWrapper = ({ data }) => {
  const contact = data.contact.nodes[0].frontmatter
  return (
    <ContactInfo>
      <Grid padding="1.75rem 0" justifyContent="space-around">
        <GridItem
          lgColumns={6}
          lgNbColumns={1}
          mdColumns={6}
          mdNbColumns={1}
          smColumns={6}
          smNbColumns={1}
        >
          <FontAwesomeIcon icon={faPhone} />
        </GridItem>
        <GridItem
          lgColumns={6}
          lgNbColumns={4}
          mdColumns={4}
          mdNbColumns={4}
          smColumns={4}
          smNbColumns={4}
        >
          {contact.phone}
        </GridItem>
      </Grid>
      <Grid padding="1.75rem 0" justifyContent="space-around">
        <GridItem
          lgColumns={6}
          lgNbColumns={1}
          mdColumns={6}
          mdNbColumns={1}
          smColumns={6}
          smNbColumns={1}
        >
          <FontAwesomeIcon icon={faAt} />
        </GridItem>
        <GridItem
          lgColumns={6}
          lgNbColumns={4}
          mdColumns={4}
          mdNbColumns={4}
          smColumns={4}
          smNbColumns={4}
        >
          {contact.email}
        </GridItem>
      </Grid>

      <Grid padding="1.75rem 0" justifyContent="space-around">
        <GridItem
          lgColumns={6}
          lgNbColumns={1}
          mdColumns={6}
          mdNbColumns={1}
          smColumns={6}
          smNbColumns={1}
        >
          <FontAwesomeIcon icon={faLocationArrow} />
        </GridItem>
        <GridItem
          lgColumns={6}
          lgNbColumns={4}
          mdColumns={4}
          mdNbColumns={4}
          smColumns={4}
          smNbColumns={4}
        >
          {contact.address}
        </GridItem>
      </Grid>
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
