const express = require('express')
const app = express()
const PORT = 5000

const customMiddleware = (req, res, next) => {
    console.log('middleware executed!')
    next()
}

//app.use(customMiddleware)

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/about', customMiddleware, (req, res) => {
    res.send('About page')
})

app.listen(PORT, () => {
    console.log('The server is running on port', PORT);
})