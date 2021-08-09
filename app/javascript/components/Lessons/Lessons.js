import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Lesson from './Lesson'
import styled from 'styled-components'
import { Container, Features, LessonCount, Tag, Subheader, SearchTags, SearchForm } from '../AppElements'
import Menu from '../Home/Menu'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = styled.div`
  padding: 70px 0 50px 0px;
  background: #917aeb;
  color: white;
  border-radius: 10px;
  text-align: center;
  margin-top: 25px;
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
        <Subheader>What do you want to learn today?</Subheader>
        <SearchForm>
          <form>
            <input placeholder="Type here ..."></input>
            <button>Search</button>
          </form>
        </SearchForm>
        <LessonCount>Popular Searches:</LessonCount>
        <SearchTags>
          <Link to={``}><Tag>Pre-school</Tag></Link>
          <Link to={``}><Tag>Mathematics</Tag></Link>
          <Link to={``}><Tag>Primary Four</Tag></Link>
          <Link to={``}><Tag>Science</Tag></Link>
          <Link to={``}><Tag>Primary Six</Tag></Link>
          <Link to={``}><Tag>English</Tag></Link>
          <Link to={``}><Tag>Primary Three</Tag></Link>
          <Link to={``}><Tag>Primary One</Tag></Link>
          <Link to={``}><Tag>Primary Five</Tag></Link>
          <Link to={``}><Tag>Social Studies</Tag></Link>
          <Link to={``}><Tag>Primary Two</Tag></Link>
          <Link to={``}><Tag>Primary Seven</Tag></Link>
        </SearchTags>
      </Header>
      <Features>
        <h2>Recently Uploaded</h2>
      </Features>
      <Grid>
        {grid}
      </Grid>
    </Container>
  )
}

export default Lessons