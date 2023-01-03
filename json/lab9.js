const http = require('http')
const { load } = require('./t1.js');
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors({
    orgin: "*",
}))
const port = 5200;
app.listen(port, () => console.log("Server is Running.."));
app.get('/user', (req, res) => {

    res.send(load())
});