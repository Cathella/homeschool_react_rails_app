import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Lesson from './Lesson'
import styled from 'styled-components'
import { Container } from '../AppElements'
import Menu from '../Home/Menu'

const Header = styled.div`
  padding: 50px 0 50px 0px;
  background: #EEE6FD;
  border-radius: 10px;
  margin-bottom: 40px;

  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
  width: 100%;
`

const Lessons = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    axios.get('/api/v1/lessons.json')
    .then( resp => setLessons(resp.data.data))
    .catch( resp => console.log(resp) )
  }, [lessons.length])

  const grid = lessons.map( item => {
    return (
      <Lesson 
        key={item.attributes.title}
        attributes={item.attributes}
      />
    )
  })

  return(
    <Container>
      <Menu />
      <Header>
        <h1>Lessons</h1>
        <Subheader>Video lessons to help your child study at home.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Container>
  )
}

export default Lessons