import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import Menu from '../Home/Menu'
import { Container } from '../AppElements'
import FooterSection from '../Home/Footer'

const Grid = styled.div`
  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 650px 1fr;
  grid-gap: 35px;
  width: 100%;
  margin-bottom: 50px;
`

const Lesson = (props) => {
  const [lesson, setLesson] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/lessons/${slug}`

    axios.get(url)
    .then( resp => {
      setLesson(resp.data)
      setLoaded(true) 
    })
    .catch( resp => console.log(resp) )
  }, [])

  return(
    <div>
      <Container>
        <Menu />
        <Grid>
        <div className="column">
          {
            loaded &&
            <Header 
              attributes={lesson.data.attributes}
              reviews={lesson.included}
            />
          }
          <div className="reviews"></div>
        </div>
        <div className="column">
          <div className="review-form">[Review Form goes here]</div>
        </div>
        </Grid>
      </Container>
      <FooterSection />
    </div>
  )
}

export default Lesson