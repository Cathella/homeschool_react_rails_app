import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Lesson from './Lesson'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-bottom: 60px;
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
    <Grid>
      {grid}
    </Grid>
  )
}

export default Lessons