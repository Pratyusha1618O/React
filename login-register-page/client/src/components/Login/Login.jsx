import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div>
            <div className="container">
                <div className="box">
                    <h4>Login</h4>

                    <form >
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className=""
                                required
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className=""
                                required
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="login-btn">
                            <button type="submit">Login</button>
                        </div>
                    </form>

                    <p>Don't Have Account?</p>
                    <div className="reg-btn">
                        <Link to="/signup"><button> Register </button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
