const http = require('http')
const fs = require('fs')
const { load } = require('./lab9.js')
const { loadB } = require('./lab9.js')
const { loadC } = require('./lab9.js')
const express = require('express')
const app = express()
const port = 3022
const cors = require('cors')
app.use(cors({
    origin: "*",
}))
app.listen(port, () => console.log(`Server is waiting at port ${port}`))
app.get('/emp', (req, res) => {
    res.send(load())
})
app.get('/pay', (req, res) => {
    res.send(loadB())
})
app.get('/dept', (req, res) => {
    res.send(loadC())
})