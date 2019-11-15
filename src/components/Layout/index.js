/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import React, { useContext } from "react"

import Header from "../Header"
import Footer from "../Footer"
import { Global, Entrance } from "./globalStyles"
import logo from "../../../content/assets/logo.svg"

const Layout = ({ children, location }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  if (state.firstLoad) {
    setTimeout(() => dispatch({ type: "TOOGLE_FIRST_LOAD" }), 3000)
  }
  return (
    <>
      <Global />
      {state.firstLoad && (
        <Entrance>
          <img src={logo} alt="logo"></img>
        </Entrance>
      )}

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
