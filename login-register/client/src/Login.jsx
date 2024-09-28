import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="">
                <div className="">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className=""
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className=""
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="">
                            Login
                        </button>
                    </form>

                    <p>Don't Have Account?</p>
                    <button className="">
                        Register
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Login
