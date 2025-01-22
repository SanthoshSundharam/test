import React, { useState } from "react";
import { data, Link } from "react-router-dom";

function Login() {

  const[username, setUserName] = useState("")
  const[password, setPassword] = useState("")

  const storeUsername = (e)=>{
    setUserName(e.target.value)
  }
  const storePassword = (e)=>{
    setPassword(e.target.value)
  }

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
          <input type="email" placeholder="Enter your email" required onChange={storeUsername}/>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="text"
          placeholder="Enter your password" required onChange={storePassword}/>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="button-container">
          <button onClick={()=>console.log(username,password)}>Login</button>
        </div>
        <div className="new-user">
          <h4>Are you a New User? <Link to="/register">Register here</Link></h4>
        </div>
      </div>
    </div>
  );
}
export default Login;
