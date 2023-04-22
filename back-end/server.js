const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todo')

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to Database"))
    .catch(console.error)

// const newTodo = new Todo({ text: "Test"})
// newTodo.save()

app.listen(4000, ()=>{console.log('Server running on port 4000')})