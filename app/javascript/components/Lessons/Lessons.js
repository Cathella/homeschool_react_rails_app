import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Lesson from './Lesson'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Lessons = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    // get all the lessons from api
    // update lessons in our state

    axios.get('/api/v1/lessons.json')
    .then( resp => {
      setLessons(resp.data.data)
    } )
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