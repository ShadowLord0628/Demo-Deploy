require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const path = require('path')

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1 style="background-color:#ddd; color:white; padding:10px">harshchavan@gmail.com</h1>')
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"))
})

app.listen(process.env.PORT | port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})