import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='signup'>
            <div className="box">
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder='Enter name'
                            autoComplete='off'
                            name='name'
                            className=''
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Enter email'
                            autoComplete='off'
                            name='email'
                            className=''
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='password'
                            name='password'
                            className=''
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit'>Register</button>
                </form>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Signup
