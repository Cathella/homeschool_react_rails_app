import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { BackImg, Container } from '../AppElements'
import { useAppState } from '../../packs/AppState'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  grid-gap: 45px;
  width: 100%;
  margin: 20px 0 50px;
`
const Column = styled.div``

const Lesson = (props) => {
  const [lesson, setLesson] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const { state, dispatch } = useAppState()

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
    // axios.defaults.headers.common = {headers: {'Authorization': 'Bearer ' + token}}

    // get lesson id
    const lesson_id = parseInt(lesson.data.id)

    // get token from state
    const {token} = state

    // get user
    const {user} = state

    axios.post('/api/v1/reviews', { review, lesson_id, user }, { headers: {'Authorization': 'Bearer ' + token} })
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
      <BackImg></BackImg>
    </div>
  )
}

export default Lesson