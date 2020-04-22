import PropTypes from "prop-types"
import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

import Loading from "../common/Loading"

import Header from "./Header"
import Footer from "./Footer"
import { Global } from "./globalStyles"

const Layout = ({ children, location }) => {
  let initialUser = false
  if (typeof window !== undefined) {
    initialUser = firebase.auth().currentUser
  }
  const [currentUser, setCurrentuser] = useState(initialUser)
  if (typeof window !== undefined) {
    firebase.auth().onAuthStateChanged(() => {
      if (!currentUser) {
        setCurrentuser(firebase.auth().currentUser || true)
      }
    })
  }
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
