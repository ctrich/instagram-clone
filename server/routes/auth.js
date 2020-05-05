const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/protected', requireLogin, (req,res) => {
    res.send('Hello user')
})

router.post('/signup', (req,res) => {
    const {name, email, password} = req.body
    if (!email || !password || !name) {
        return res.status(422).json({error: "Please enter all fields"})
    }
    User.findOne({email: email})
    .then((savedUser) => {
        if (savesUser) {
            return res.status(422).json({error: "user already exists with that email"})
        }
        bcrypt.hash(password, 12)
        .then((hashedPassword) => {
            const user = new User({
                email,
                password: hashedPassword,
                name
            })
    
            user.save()
            .then(user => {
                res.json({message: "saved succesfully"})
            })
            .catch(err=> {
                console.log(err)
            })
        })
        
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signin', (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        res.status(422).json({err: "Please enter email and password"})
    }
    User.findOne({email: email})
    .then(savedUser => {
        if (!savedUser) {
            res.status(422).json({err: "Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(match => {
            if (match) {
               // res.json({message: "sign in successful"})
               const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
               res.json({token})
            } else {
                res.status(422).json({err: "Invalid email or password"})
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
})

module.exports = router