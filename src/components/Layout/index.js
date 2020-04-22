import PropTypes from "prop-types"
import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

import Loading from "../common/Loading"

import Header from "./Header"
import Footer from "./Footer"
import { Global } from "./globalStyles"

const Layout = ({ children, location }) => {
  const [currentUser, setCurrentuser] = useState(firebase.auth().currentUser)
  firebase.auth().onAuthStateChanged(() => {
    if (!currentUser) {
      setCurrentuser(firebase.auth().currentUser || true)
    }
  })
  if (!currentUser) {
    return <Loading />
  }

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
