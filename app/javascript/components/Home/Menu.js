import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Logo from 'images/logo.svg'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  a {
    text-decoration: none;
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
const UpscaleBtn = styled.div`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 30px;
  background: transparent;
`

const Menu = () => {
  return(
    <Nav>
          <Link to={`/`}>
            <AppLogo>
              <img src={Logo} />
              <span>Homeschool</span>
            </AppLogo>
          </Link>
          
          <LeftLinks>
            <Link to={`/`}>Teachers</Link>
            <Link to={`/`}>Children</Link>
            <Link to={`/lessons`}>Lessons</Link>
            <Link to={`/`}>
              <UpscaleBtn>Signup</UpscaleBtn>
            </Link>
          </LeftLinks>
        </Nav>
  )
}

export default Menu