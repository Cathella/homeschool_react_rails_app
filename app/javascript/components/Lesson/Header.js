import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = (props) => {
  const { title, avg_score, video_url, description, topic, subject, grade } = props.attributes

  return(
    <div className="wrapper">
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${video_url}`}>
        </iframe>
      </div>
      <div>
        <div className="lesson_title">{title}</div>
        <div className="total_reviews"></div>
        <div className="star_rating"></div>
        <div className="total_out_of">4 out of 5</div>
      </div>
      <div className="lesson_description">{description}</div>
      <div className="lesson_original_link">
        <Link to={`https://www.youtube.com/${video_url}`}>Original video link</Link>
      </div>
      <div className="lesson_topic">{topic}</div>
      <div className="lesson_subject">{subject}</div>
      <div className="lesson_grade">{grade}</div>
    </div>
  )
}

export default Header