import React from 'react'
import { Container, BackBlueImg, GetstartedBtn } from '../../components/AppElements'
import styled from 'styled-components'
import Lessons from '../../components/Lessons/Lessons'
import { BrowserRouter, Link } from 'react-router-dom'
import { useAppState } from '../AppState.jsx'

const Header = styled.div`
  padding: 50px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #753CBC;
  }

  div {
    display: flex;
    justify-content: center;
  }
`
const Grade = styled.div`
  background: linear-gradient(180deg, #FED0D4 0%, #ECC3C6 100%);
  padding: 1em 2em;
  font-weight: bold;
  border-radius: 10px;
  margin: 1em 0 0 0;
`
const Subjects = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  text-align: center;
  margin: 0 0 60px 0;

  a {
    text-decoration: none;
    line-height: 100px;
    border: 1.4px dashed gray;
    background: white;
    border-radius: 10px;
    color: black;

    &:hover {
      font-weight: bold;
      background: #e6f4f4;
    }
  }

  div {
    height: 100px;
  }
`

const Dashboard = (props) => {
  const { state, dispatch } = useAppState()

  return(
    <div>
      <Container>
        <Header>
          <h2>Welcome, dear student {state.username}!</h2>
          <div>
            <Grade>Grade: Primary One</Grade>
          </div>
        </Header>
        <Subjects>
          <Link to="">
            <div>Mathematics</div>
          </Link>
          <Link to="">
          <div>English</div>
          </Link>
          <Link to="">
          <div>Science</div>
          </Link>
          <Link to="">
          <div>Social Studies</div>
          </Link>
          <Link to="">
          <div>Reading</div>
          </Link>
          <Link to="">
          <div>Drawing</div>
          </Link>
          <Link to="">
          <div>Homework</div>
          </Link>
          <Link to="">
          <div>Practise Exams</div>
          </Link>
          <Link to="">
          <div>Topic Quizzes</div>
          </Link>
        </Subjects>
        <Lessons />
      </Container>
      <BackBlueImg></BackBlueImg>
    </div>
  )
}

export default Dashboard 