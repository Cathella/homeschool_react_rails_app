import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import Home from '../packs/pages/Home.jsx'
import Auth from '../packs/pages/Auth.jsx'
import Dashboard from '../packs/pages/Dashboard.jsx'
import Lessons from './Lessons/Lessons'
import Lesson from './Lesson/Lesson'
import { Container } from './AppElements'
import { useAppState } from '../packs/AppState.jsx'
import FooterSection from './Footer'

const App = (props) => {
  const { state, dispatch } = useAppState()
  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"))
    
    if (auth) {
      dispatch({type: "auth", payload: auth})
      props.history.push("/dashboard")
    } else {
      props.history.push("/")
    }
  }, [])

  return (
    <>
      <Container>
        <Route path="/" component={Menu} />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/lessons/:slug" component={Lesson} />
      </Switch>
      
      <FooterSection />
    </>
  );
}

export default App;