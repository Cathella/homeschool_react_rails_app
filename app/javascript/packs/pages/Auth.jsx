import React from 'react'
import { useAppState } from "../AppState.jsx"
import { Form, BackImg } from '../../components/AppElements.js';
import Background from 'images/bg-purple.svg'

const Auth = (props) => {
  const type = props.match.params.form;

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = React.useState({
    username: "",
    password: "",
    grade: "",
    age: "",
    phone: ""
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
    signup: () => {
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }).then((response) => response.json());
    },
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

  const handleSignupChange = (event) => {
    setSignupData({...signupData, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    actions[type]().then((data) => {
      setUserData(data)
    })
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <label>{type}</label>
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
          value={type} 
        />
        <div></div>
      </Form>
      <Form onSubmit={handleSubmit}>
        <label>{type}</label>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          value={signupData.username} 
          onChange={handleSignupChange} 
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number"
          value={signupData.phone} 
          onChange={handleSignupChange} 
        />
        <input 
          type="number" 
          name="age"
          placeholder="Age"
          value={signupData.age} 
          onChange={handleSignupChange} 
        />
        <input 
          type="text" 
          name="grade"
          placeholder="Grade"
          value={signupData.grade}
          onChange={handleSignupChange} 
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={signupData.password} 
          onChange={handleSignupChange} 
        />
        <input 
          type="submit"  
          value={type} 
        />
        <div></div>
      </Form>
      <BackImg></BackImg>
    </div>
  )
}

export default Auth 