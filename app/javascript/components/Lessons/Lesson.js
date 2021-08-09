import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { LessonVideo, Tag } from '../AppElements'
import styled from 'styled-components'

const LessonTitle = styled.div`
  padding: 10px 12px 10px;
  font-size: 14px;
  font-weight: bold;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 20px;
  font-size: 14px;
  border-top: 1px solid #000;
  
  a {
    text-decoration: none;
    background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
  }
`
const Card = styled.div`
  background: #eee6fd;
  border-radius: 10px;
`
const About = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 10px;
`

const Lesson = (props) => {
  return(
    <Card>
      <LessonVideo>
        <iframe
          src={`https://www.youtube.com/embed/${props.attributes.video_url}`}>
        </iframe>
      </LessonVideo>
      <LessonTitle>{props.attributes.title}</LessonTitle>
      <About>
        <Tag>{props.attributes.subject}</Tag>
        <Tag>{props.attributes.grade}</Tag>
        <Tag>{props.attributes.topic}</Tag>
      </About>
      <LinkWrapper>
        <div className="lesson-score">Review score: {props.attributes.average_score}</div>
        <Link to={`/lessons/${props.attributes.slug}`}>
          View lesson
        </Link>
      </LinkWrapper>
    </Card>
  )
}

export default Lesson