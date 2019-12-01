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
          <a href={"tel: +" + contact.phone_call.replace(/\D/g, "")}>
            {contact.phone}
          </a>
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
          <a href={"mailto: " + contact.email}>{contact.email}</a>
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
          <a
            href="https://www.google.com/maps/place/33%C2%B033'14.0%22N+7%C2%B043'05.0%22W/@33.5538915,-7.7202387,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d33.5538874!4d-7.7180495"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.address}
          </a>
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
              phone_call
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
