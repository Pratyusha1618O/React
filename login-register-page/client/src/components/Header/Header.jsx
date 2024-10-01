import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import seva from '../Images/seva.png'

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="left">
                    <Link to='/' className='logo' >
                        <img src={seva} alt="Seva" width={70} />
                    </Link>
                </div>

                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => 
                                    `normal ${isActive ? "active" : "normal"} `
                                }
                            > Home </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => 
                                    `normal ${isActive ? "active" : "normal"} `
                                }
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => 
                                    `normal ${isActive ? "active" : "normal"} `
                                }
                            >Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <Link to="/login" className='login'>Login</Link>
                    <Link to="/signup" className='signup'>SignUp</Link>
                </div>


            </nav>
        </header>
    )
}

export default Header
