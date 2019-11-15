/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

const initialState = {
  firstLoad: true,
}

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider initial={initialState}>
      {element}
    </GlobalContextProvider>
  )
}
