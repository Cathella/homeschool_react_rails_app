import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Lessons = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    // get all the lessons from api
    // update lessons in our state

    axios.get('/api/v1/lessons.json')
    .then( resp => {
      setLessons(resp.data.data)
    } )
    .catch( resp => console.log(resp) )
  }, [lessons.length])

  const list = lessons.map( item => {
    return (
      <li key={item.attributes.title}>{item.attributes.title}</li>
    )
  })

  return(
    <div className="container">
      <div className="header">
        <h1>Lessons</h1>
        <div className="subheader">Video lessons to help your child study at home.</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Lessons