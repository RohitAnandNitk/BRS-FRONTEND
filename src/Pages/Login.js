import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form >
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

/*
 -> Props value can't change it is read only
 -> from handling  --> onChange handling

*/ 
