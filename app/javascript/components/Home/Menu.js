import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import Logo from 'images/logo.svg'
import Bar from 'images/menu-1.svg'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
`
const NavLink = styled(Link)`
  color: #51535A;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`
const Bars = styled.div`
  display: none;
  color: #51535A;

  img {
    width: 40px;
    margin: -24px -35px 0 0;
  }

  @media screen and (max-width: 900px) {
    display: inline-block;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtnLink = styled(Link)`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 30px;
  background: transparent;

  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FA64A9;
    color: #FFFFFF;
    border: none;
  }
`
const AppLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    text-transform: uppercase;
    color: black;
    font-weight: bold;
  }

  img {
    width: 45px;
    margin-right: 10px;
  }
`
const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;

  a {
    color: #51535A;
    margin-left: 20px;
    margin-right: 20px;
  }
`


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
          Children
        </NavLink>
        <NavBtn>
          <NavBtnLink to={`/`}>Sign&nbsp;up</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  )
}

export default Menu