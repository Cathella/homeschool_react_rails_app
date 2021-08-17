import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Home from '../packs/pages/Home.jsx'
import Auth from '../packs/pages/Auth.jsx'
import Dashboard from '../packs/pages/Dashboard.jsx'
import { Container } from './AppElements'

const App = () => {
  return (
    <>
      <Container>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/lessons" component={Lessons} /> */}
        {/* <Route exact path="/lessons/:slug" component={Lesson} /> */}
      </Switch>
      </Container>
    </>
  );
}

export default App;