import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { Container, NavSection } from '../AppElements'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  grid-gap: 45px;
  width: 100%;
  margin: 20px 0 50px;
`
const Column = styled.div`
  &:last-child {
    // background: #eee6fd;
    // height: 100vh;
    // overflow-y: scroll;
    // margin-top: 15px;
    // padding: 0px 20px 20px 20px;
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

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

    console.log('review:', review)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    // get lesson id
    const lesson_id = parseInt(lesson.data.id)
    axios.post('/api/v1/reviews', {review, lesson_id})
    .then( resp => {
      const included = [...lesson.included, resp.data.data]
      setLesson({...lesson, included})
      setReview({description: '', score: 0})
    })
    .catch( resp => {} )
  }

  // set score
  const setRating = (score, e) => {
    e.preventDefault()
    setReview({...review, score})
  }

  let reviews
  if (loaded && lesson.included) {
    reviews = lesson.included.map( (item, index) => {
      return(
        <Review 
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }

  return(
    <div>
      {/* <NavSection>
        <Container>
          <Menu />
        </Container>
      </NavSection> */}

      <Container>
        <Grid>
          {
            loaded &&
            <Fragment>
              <Column>
                <Header 
                  attributes={lesson.data.attributes}
                  reviews={lesson.included}
                />
              
                {/* {reviews} */}
              </Column>
              <Column>
                <ReviewForm
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  setRating={setRating}
                  attributes={lesson.data.attributes}
                  review={review}
                />
              </Column>
            </Fragment>
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Lesson