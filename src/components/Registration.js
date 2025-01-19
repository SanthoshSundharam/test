import {
    BrowserRouter as Router,
    Routes, Route,
    Link
} from 'react-router-dom';


function Registration() {
    return (
      <div className="form">
        <div className="form-container">
          <h1 className="welcome-text">Welcome</h1>
          <h2 className="login-title">Registration Page</h2>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone No</label>
            <input type="number" placeholder="Enter your phone" required />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your email" required />
          </div>
          <div className="password">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" 
            placeholder="Enter your password" 
            required />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div className="button-container">
            <button>Login</button>
          </div>
          <div className="new-user">
            <h4>Already have an account? <span>
            <Link to="/">Login here</Link></span></h4>
          </div>
        </div>
        <div className="picture">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Registeration Background"
            className="image"
          />
        </div>
      </div>
    );
  }
  
  export default Registration;
  