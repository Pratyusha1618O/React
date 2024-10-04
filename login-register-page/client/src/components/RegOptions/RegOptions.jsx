import React from 'react'
import {Link } from 'react-router-dom'
import '../RegOptions/RegOptions.css'

function RegOptions() {
    return (
        <div className="container">
            <div className="options-box">
                <h3>You are from :</h3>

                <form>
                    <div className="radios">
                        <input
                            type="radio"
                            name="blood"
                            id=""
                            className='option-radios'
                        />
                        <label htmlFor="blood">Blood Bank</label>
                    </div>

                    <div className="radios">
                        <input
                            type="radio"
                            name="blood"
                            id=""
                            className='option-radios'
                        />
                        <label htmlFor="ambulance">Ambulance cell</label>
                    </div>

                    <div className="radios">
                        <input
                            type="radio"
                            name="blood"
                            id=""
                            className='option-radios'
                        />
                        <label htmlFor="hospital">Hospital</label>
                    </div>

                    <div className="radios">
                        <input
                            type="radio"
                            name="blood"
                            id=""
                            className='option-radios'
                        />
                        <label htmlFor="doctor">Doctor</label>
                    </div>

                    <div className="option-next-btn">
                        <Link to='' ><button>Next</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RegOptions
