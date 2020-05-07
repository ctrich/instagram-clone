import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input 
                type="text"
                placeholder="name"
                />
                <input 
                type="text"
                placeholder="email"
                />
                <input 
                type="text"
                placeholder="password"
                />
                <button class="btn btn-color">Sign Up</button>
                <h6>
                    <Link to='/signin'>Already have an account?</Link>
                </h6>
            </div>
        </div>
    )
}


export default Signup