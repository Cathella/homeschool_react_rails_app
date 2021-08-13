import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Video, LessonTitle, Tag, About } from '../AppElements'

const Describe = styled.div`
  background: #eeeeee;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  font-size: 14px;
`
const Reviews = styled.div`
  font-size: 14px;
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`

const Header = (props) => {
  const { title, average_score, video_url, description, topic, subject, grade } = props.attributes
  const total = props.reviews.length

  return(
    <div className="wrapper">
      <Video>
        <iframe
          src={`https://www.youtube.com/embed/${video_url}`}>
        </iframe>
      </Video>
      <LessonTitle>{title}</LessonTitle>
      <Reviews>
        <div className="star_rating"></div>
        <div className="total_out_of">Review score: <span>{average_score} out of 5.</span> <i>({total} Reviews)</i></div>
      </Reviews>
      <About>
        <Tag>{props.attributes.subject}</Tag>
        <Tag>{props.attributes.grade}</Tag>
        <Tag>{props.attributes.topic}</Tag>
      </About>
      <Describe>
        {description}
      </Describe>
    </div>
  )
}

export default Header