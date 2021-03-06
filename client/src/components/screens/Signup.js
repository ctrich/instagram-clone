import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const postData = () => {
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({html: data.error, classes: '#c62828 red darken-3'})
            } else {
                M.toast({html: data.message, classes: '#43a047 green darken-1'})
                history.push('/signin')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-color" onClick={() => postData()}>Sign Up</button>
                <h6>
                    <Link to='/signin'>Already have an account?</Link>
                </h6>
            </div>
        </div>
    )
}


export default Signup