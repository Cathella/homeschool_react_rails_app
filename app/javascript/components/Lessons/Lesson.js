import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Lesson = (props) => {
  return(
    <div className="card">
      <div className="lesson-video">
        <iframe width="300" height="170"
          src={`https://www.youtube.com/embed/${props.attributes.video_url}`}>
        </iframe>
      </div>
      <div className="lesson-title">{props.attributes.title}</div>
      <div className="lesson-score">{props.attributes.average_score}</div>
      <div className="lesson-link">
        <Link to={`/lessons/${props.attributes.slug}`}>View lesson</Link>
      </div>
    </div>
  )
}

export default Lesson