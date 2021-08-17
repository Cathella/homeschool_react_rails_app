import React from 'react'
import { useAppState } from '../AppState'
import { Route as Link } from 'react-router-dom'

const Dashboard = (props) => {

  const {state, dispatch} = useAppState()
  const {token, url, lessons, username} = state
  const getLessons = async () => {
    const response = fetch(url + "/lessons/")
    const lessons = await response.json()
    dispatch({type: "getLessons", payload: lessons})
  }

  React.useEffect(() => getLessons(), [])

  const loaded = () => {
    <div>
      <h1>{username}'s Lessons</h1>
      <Link to="/dashboard/new">
        <button>New Lesson</button>
      </Link>
      <Route path="/dashboard/:action" component={LessonForm} />
      <ul>
        {lessons.map(lesson => {
          <div key={lesson.id}>
            <h2>{lesson.title}</h2>
            <h4>{lesson.description}</h4>
          </div>
        })}
      </ul>
    </div>
  }

  return(
    lessons ? loaded() : <h1>Loading...</h1>
  )
}

export default Dashboard 