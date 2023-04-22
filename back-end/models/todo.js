const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        tpye: Boolean,
    },
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo