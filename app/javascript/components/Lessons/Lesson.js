import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { LessonVideo, GetstartedBtn, CallToAction } from '../AppElements'
import styled from 'styled-components'

const LessonTitle = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    text-decoration: none;
  }
`

const Lesson = (props) => {
  return(
    <div className="card">
      <LessonVideo>
        <iframe
          src={`https://www.youtube.com/embed/${props.attributes.video_url}`}>
        </iframe>
      </LessonVideo>
      <LessonTitle>{props.attributes.title}</LessonTitle>
      <LinkWrapper>
      <div className="lesson-score">{props.attributes.average_score}</div>
      <Link to={`/lessons/${props.attributes.slug}`}>
        <GetstartedBtn>
          View lesson
        </GetstartedBtn>
      </Link>
      </LinkWrapper>
    </div>
  )
}

export default Lesson