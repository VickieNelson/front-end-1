import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  //set user
  const [user, setUser] = useState({ username: "", password: "" });

  //handle change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //login submit
  const handleLoginSubmit = (event) => {
    //prevent default browser actions
    event.preventDefault();
    //user status and push to new
    props.login(user, (status) =>
      status
        ? props.history.push(props.location.state?.url || "/")
        : props.history.push("/login")
    );
  };

  useEffect(() => {
    if (localStorage.getItem("token")) props.history.push("/");
    return () => props.clearErrorMessages();
  }, []);
  console.log({ isLoading: props.isLoading });

  return (
    <div className='login-page-container'>
      <header>HEADER PLACEHOLDER - NEED HEADER COMPONENT</header>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <span>
            <h1>Log in</h1>
          </span>
          <div>Please log in using the form below.</div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            id='name'
            onChange={(event) => handleChange(event)}
            value={user.userName}
          />
          <label>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(event) => handleChange(event)}
            value={user.password}
          />
          <button>Log In</button>
          <div className='register_link'>
            If you do not have an account with us,{" "}
            <Link to='/signup'>Sign up here</Link>.
          </div>
        </form>
        {/* //CLOSE FORM */}
      </div>
      {/* //CLOSE LOGIN CONTAINER */}
    </div>
    //CLOSE LOGIN PAGE
  );
};

// };

export default Login;
