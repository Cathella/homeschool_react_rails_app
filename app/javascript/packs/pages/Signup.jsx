import React from 'react'
import { useAppState } from "../AppState.jsx"
import { RegisterForm, BackImg } from '../../components/AppElements.js';

const Signup = (props) => {
  const type = props.match.params.form;

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
    }
  };

  const handleSignupChange = (event) => {
    setSignupData({...signupData, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    actions["signup"]().then((data) => {
      setUserData(data)
    })
  }

  return(
    <div>
      <RegisterForm onSubmit={handleSubmit}>
        <label>Register</label>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          value={signupData.username} 
          onChange={handleSignupChange} 
        />
        <select name="grade">
          <option value="Preschool">Preschool</option>
          <option value="Primary One">Primary One</option>
          <option value="Primary Two">Primary Two</option>
          <option value="Primary Three">Primary Three</option>
          <option value="Primary Four">Primary Four</option>
          <option value="Primary Five">Primary Five</option>
          <option value="Primary Six">Primary Six</option>
          <option value="Primary Seven">Primary Seven</option>
        </select>
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={signupData.password} 
          onChange={handleSignupChange} 
        />
        <input 
          type="submit"  
          value="Sign up" 
        />
        <div></div>
      </RegisterForm>
      <BackImg></BackImg>
    </div>
  )
}

export default Signup 