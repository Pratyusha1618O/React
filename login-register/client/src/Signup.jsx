import React from 'react'

function Signup() {
    return (
        <div className='signup'>
            <div className="box">
                <h2>Register</h2>
                <form>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder='Enter name'
                            autoComplete='off'
                            name='name'
                            className=''
                        // onChange={{}}
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
                        // onChange={{}}
                        />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='password'
                            name='password'
                            className=''
                            // onChange={{}}
                        />
                    </div>

                    <button type='submit'>Register</button>
                </form>
                <p>Already have an account?</p>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Signup
