import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import Menu from '../Home/Menu'
import ReviewForm from './ReviewForm'
import { Container } from '../AppElements'
import FooterSection from '../Home/Footer'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  grid-gap: 35px;
  width: 100%;
  margin-bottom: 50px;
`
const Column = styled.div`
  &:last-child {
    background: #eee6fd;
    height: 100vh;
    overflow-y: scroll;
    margin-top: 15px;
  }
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
          {
            loaded &&
            <Fragment>
              <Column>
                <Header 
                  attributes={lesson.data.attributes}
                  reviews={lesson.included}
                />
              
                {/* <div className="reviews"></div> */}
              </Column>
              <Column>
                <ReviewForm />
              </Column>
            </Fragment>
          }
        </Grid>
      </Container>
      <FooterSection />
    </div>
  )
}

export default Lesson