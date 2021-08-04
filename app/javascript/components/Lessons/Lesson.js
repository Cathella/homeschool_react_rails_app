import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const LessonVideo = styled.div`
  iframe {
    width: 300px;
    height: 170px;
    border: 1px solid #fefefe;
    border-radius: 10px;
  }
`
const LessonTitle = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 20px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
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
      <div className="lesson-score">{props.attributes.average_score}</div>
      <LinkWrapper>
        <Link to={`/lessons/${props.attributes.slug}`}>View lesson</Link>
      </LinkWrapper>
    </div>
  )
}

export default Lesson