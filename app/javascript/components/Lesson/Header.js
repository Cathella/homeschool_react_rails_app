import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Video, LessonTitle, Tag, About } from '../AppElements'
import Rating from '../Rating/Rating'

const Describe = styled.div`
  background: #eeeeee;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 2rem;
`
const Reviews = styled.div`
  font-size: 14px;
  margin: 20px 0;
  padding: 20px 0 0 0;
  border-top: 1px solid #ddd;
  font-weight: bold;
  color: #8795a1;
  font-size: 16px;
  text-align: right;
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
      <About>
        <Tag>{props.attributes.subject}</Tag>
        <Tag>{props.attributes.grade}</Tag>
        <Tag>{props.attributes.topic}</Tag>
      </About>
      <Describe>
        {description}
      </Describe>
      <Reviews>
        <div className="star_rating"><Rating score={props.attributes.average_score} /></div>
        <div className="total_out_of">{average_score}/5 (Based on {total} Reviews)</div>
      </Reviews>
    </div>
  )
}

export default Header