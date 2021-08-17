import React, { Fragment } from 'react'
import { useAppState } from '../packs/AppState.jsx'

const LessonForm = (props) => {
  const {state, dispatch} = useAppState()
  const action = props.match.params.action
  const [formData, setFormData] = React.useState(state[action])

  return(
    <div>
      <form>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </form>
    </div>
  )
}

export default LessonForm