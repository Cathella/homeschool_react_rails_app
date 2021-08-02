import React from 'react'
import styled from 'styled-components'
import Logo from 'images/logo.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Home = () => {
  return(
    <Container>
      <Nav>
        <Link to={`/`}>
          <AppLogo>
            <img src={Logo} />
            <span>Homeschool</span>
          </AppLogo>
        </Link>
        
        <div>
          <a href="">Teachers</a>
          <a href="">Children</a>
          <a href="">Lessons</a>
          <a href="">Signup</a>
        </div>
      </Nav>
    </Container>
  )
}

export default Home