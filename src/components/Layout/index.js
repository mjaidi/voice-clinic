/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
// import {
//   GlobalDispatchContext,
//   GlobalStateContext,
// } from "../../context/GlobalContextProvider"
import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import { Global } from "./globalStyles"

const Layout = ({ children, location }) => {
  // const dispatch = useContext(GlobalDispatchContext)
  // const state = useContext(GlobalStateContext)
  // if (state.firstLoad) {
  //   setTimeout(() => dispatch({ type: "TOOGLE_FIRST_LOAD" }), 3000)
  // }
  return (
    <>
      <Global />
      <Header location={location} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
