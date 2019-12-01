import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ name }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { regex: "/[jpg||png||jpeg||gif||svg]/" } }
      ) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const match = data.allFile.nodes.find(f => f.name === name)

  return (
    <Img
      fluid={match.childImageSharp.fluid}
      style={{ height: "100%", width: "100%" }}
    />
  )
}
Image.defaultProps = {
  name: `logo`,
}

Image.propTypes = {
  name: PropTypes.string,
}

export default Image
