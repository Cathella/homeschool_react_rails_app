import React, { Fragment } from 'react'
import Bar from 'images/menu-1.svg'
import Logo from 'images/logo.svg'
import { Nav, NavMenu, NavBtn, NavBtnLink, Bars, NavLink, AppLogo } from './AppElements'
import { useAppState } from '../packs/AppState.jsx'

const Menu = (props) => {
  const {state, dispatch} = useAppState()

  return(
    <Nav>
      <NavLink to="/">
        <AppLogo>
          <img src={Logo} />
          <span>Homeschool</span>
        </AppLogo>
      </NavLink>
      <Bars><img src={Bar} /></Bars>
      <NavMenu>
        <NavLink to="/lessons">Children</NavLink>
        {!state.token ? (<><NavLink to="/auth/login">Login</NavLink>
        <NavBtn>
          <NavBtnLink to="/auth/signup">Signup</NavBtnLink>
        </NavBtn></>) : null}
        {state.token ? <NavBtn><NavBtnLink to="" onClick={() => {
          dispatch({type: "logout"})
          props.history.push("/")
        }}>Logout</NavBtnLink></NavBtn> : null}
      </NavMenu>
    </Nav>
  )
}

export default Menu