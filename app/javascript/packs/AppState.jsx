import { useContext, useReducer } from 'react'
import React from 'react'

// initialState
const initialState = {
  // url: "https://stark-journey-70583.herokuapp.com/api/v1",
  url: "http://localhost:3000/api/v1",
  token: null,
  username: null,
  lessons: null,
  user: 0
}

// Reducer 
// action = {type: "", payload: ---}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "auth":
      newState = { ...state, ...action.payload }
      return newState;
      break;
    case "logout":
      newState = { ...state, token: null, username: null }
      window.localStorage.removeItem("auth")
      return newState;
      break;
    default: state;
      break;
  }
}

// AppContext
const AppContext = React.createContext(null)

// AppState Component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>
};

// useAppState hook
export const useAppState = () => {
  return React.useContext(AppContext)
}