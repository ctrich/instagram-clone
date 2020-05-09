import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input 
                type="text"
                placeholder="email"
                />
                <input 
                type="text"
                placeholder="password"
                />
                <button className="btn btn-color">Login</button>
                <h6>
                    <Link to='/signup'>Don't have an account?</Link>
                </h6>
            </div>
        </div>
    )
}


export default Login