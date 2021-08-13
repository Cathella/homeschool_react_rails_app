import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, AppLogo } from '../AppElements'
import Logo from 'images/logo.svg'
import Bar from 'images/menu-1.svg'

const Menu = () => {
  return(
    <Nav>
      <NavLink to={`/`}>
        <AppLogo>
          <img src={Logo} />
          <span>Homeschool</span>
        </AppLogo>
      </NavLink>
      <Bars>
        <img src={Bar} />
      </Bars>
      <NavMenu>
        <NavLink to={`/teachers`}>
          Teachers
        </NavLink>
        <NavLink to={`/lessons`}>
          Lessons
        </NavLink>
        <NavBtn>
          <NavBtnLink to={`/`}>Sign&nbsp;up</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  )
}

export default Menu