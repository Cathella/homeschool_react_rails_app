import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

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
    <div className="wrapper">
      <div className="column">
        {
          loaded &&
          <Header 
            attributes={lesson.data.attributes}
          />
        }
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[Review Form goes here]</div>
      </div>
    </div>
  )
}

export default Lesson