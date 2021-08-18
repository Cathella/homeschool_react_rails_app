import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { LessonVideo, Tag, LessonTitle, About } from '../AppElements'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 20px;
  font-size: 17px;
  border-top: 1px solid #000;
  
  a {
    text-decoration: none;
    background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1.3px dashed black;
    box-shadow: -4px 4px 0px rgba(0,0,0,0.1)
  }

  span {
    font-size: 16px;
  }
`
const Card = styled.div`
  background: #ffeeef;
  border: 1.4px dashed gray;
  border-radius: 10px;
  position: relative;
`
const ContentPad = styled.div`
  padding: 0 12px;
`

const Lesson = (props) => {
  return(
    <Card>
      <LessonVideo>
        <iframe
          src={`https://www.youtube.com/embed/${props.attributes.video_url}`}>
        </iframe>
        <Link to={`/lessons/${props.attributes.slug}`}>
          <div></div>
        </Link>
      </LessonVideo>
      <ContentPad>  
        <LessonTitle>{props.attributes.title}</LessonTitle>
        <About>
          <Tag>{props.attributes.subject}</Tag>
          <Tag>{props.attributes.grade}</Tag>
          <Tag>{props.attributes.topic}</Tag>
        </About>
      </ContentPad>

      <LinkWrapper>
        <Rating score={props.attributes.average_score} />
        {/* <Link to={`/lessons/${props.attributes.slug}`}>
          View lesson
        </Link> */}
      </LinkWrapper>
    </Card>
  )
}

export default Lesson