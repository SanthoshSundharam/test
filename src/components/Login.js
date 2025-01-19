import React, { useState } from "react";
import { data, Link } from "react-router-dom";

function Login() {
  const handleSubmit = () => {

    console.log(email, password)
    fetch('https://dummyjson.com/auth/login', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json"
      },
      body : JSON.stringify({
        email,
        password,
        expiresInMins : 30,
      }),
      
    }).then((data)=> {
      return data.json()
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  return (
    <div className="form">
      <div className="picture">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Background"
          className="image"  
        />
      </div>

      <div className="form-container">
        <h1 className="welcome-text">Welcome Back</h1>
        <h2 className="login-title">Login Page</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="text"
          placeholder="Enter your password" 
          required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="button-container">
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className="new-user">
          <h4>Are you a New User? <Link to="/register">Register here</Link></h4>
        </div>
      </div>
    </div>
  );
}
export default Login;
