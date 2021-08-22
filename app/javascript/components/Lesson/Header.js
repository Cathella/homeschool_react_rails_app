import React from 'react'
import styled from 'styled-components'
import { Video, LessonTitle, Tag, About } from '../AppElements'
import Rating from '../Rating/Rating'

const Describe = styled.div`
  font-size: 14px;
  margin: 1rem 0 2rem;
`
const Title = styled.div`
  font-size: 17px;
  margin: 1rem 0;
  font-weight: bold;
`
const Reviews = styled.div`
  font-size: 14px;
  margin: 20px 0;
  padding: 20px 0 0 0;
  border-top: 1px solid black;
  font-size: 15px;
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
      <Title>{title}</Title>
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