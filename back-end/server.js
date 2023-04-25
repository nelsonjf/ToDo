// server foundation
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

// mongo connection
const Todo = require('./models/todo')

mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to Database"))
    .catch(console.error)

// run server on port
app.listen(4000, ()=>{console.log('Server running on port 4000')})