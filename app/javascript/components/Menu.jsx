import React, { Fragment } from 'react'
import Bar from 'images/menu-1.svg'
import Logo from 'images/logo.svg'
import { Nav, NavMenu, NavBtn, NavBtnLink, Bars, NavLink, AppLogo } from './AppElements'

const Menu = (props) => {
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
        <NavLink to="/dashboard">Children</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
        <NavBtn>
          <NavBtnLink to="/auth/signup">Signup</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  )
}

export default Menu