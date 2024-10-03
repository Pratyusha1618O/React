import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import '../Login/Login.css'
import axios from 'axios'

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }


  return (
    <div className='container'>
      <div className="box">
        <h4>Sign Up</h4>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder='Enter name'
              autoComplete='off'
              name='name'
              className=''
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter email'
              autoComplete='off'
              name='email'
              className=''
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='password'
              name='password'
              className=''
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="signup-btn">
            <button type='submit'> SignUp </button>
          </div>
        </form>

        <p>Already have an account?</p>
        <div className="log-btn">
          <Link to="/login"><button> Login </button></Link>
        </div>

      </div>
    </div>
  )
}

export default Signup
