import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Lessons from './Lessons/Lessons'
import Lesson from './Lesson/Lesson'
import Teachers from './Teachers/Teachers'
import Teacher from './Teacher/Teacher'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lessons" component={Lessons} />
      <Route exact path="/lessons/:slug" component={Lesson} />
      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/teachers/:slug" component={Teacher} />
    </Switch>
  );
}

export default App;