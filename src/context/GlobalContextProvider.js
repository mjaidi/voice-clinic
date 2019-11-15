import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "TOOGLE_FIRST_LOAD": {
      return {
        ...state,
        firstLoad: false,
      }
    }
    default:
      return state
  }
}

const GlobalContextProvider = ({ children, initial }) => {
  const [state, dispatch] = React.useReducer(reducer, initial)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
