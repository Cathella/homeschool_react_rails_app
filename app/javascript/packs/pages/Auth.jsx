import React from 'react'
import { useAppState } from "../AppState.jsx"
import { Form, BackImg } from '../../components/AppElements.js';

const Auth = (props) => {
  const type = props.match.params.form;

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [userData, setUserData] = React.useState(null);
  const { state, dispatch } = useAppState();
  console.log(state)

  React.useEffect(() => {
    if (userData) {
      console.log(userData)
      const { token, user } = userData;
      dispatch({ type: "auth", payload: { token, username: user.username }});
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, username: user.username })
      );
      props.history.push("/dashboard");
    }
  }, [userData]);

  const actions = {
    login: () => {
      return fetch(state.url + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  const handleLoginChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    actions["login"]().then((data) => {
      setUserData(data)
    })
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <label>Login</label>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          value={formData.username} 
          onChange={handleLoginChange} 
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={formData.password} 
          onChange={handleLoginChange} 
        />
        <input 
          type="submit"  
          value="Login" 
        />
        <div></div>
      </Form>
      <BackImg></BackImg>
    </div>
  )
}

export default Auth 