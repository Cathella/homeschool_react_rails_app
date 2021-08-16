import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from '../packs/pages/Home.jsx'
import Auth from '../packs/pages/Auth.jsx'
import Dashboard from '../packs/pages/Dashboard.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/lessons" component={Lessons} /> */}
        {/* <Route exact path="/lessons/:slug" component={Lesson} /> */}

        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;