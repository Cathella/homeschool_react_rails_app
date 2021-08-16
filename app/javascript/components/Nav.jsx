import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Children</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/signup">Signup</Link>
    </nav>
  )
}

export default Nav 