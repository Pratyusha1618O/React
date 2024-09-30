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
                                    `block py-2 pr-4 pl-3 duration-200 border-b 
                            ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            > Home </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b 
                            ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b 
                            ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <Link to="/login" className='login'>Login</Link>
                    <Link to="/signup" className='signUp'>SignUp</Link>
                </div>


            </nav>
        </header>
    )
}

export default Header
