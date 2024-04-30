const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    activity: {
        type: String,
        required: true
    }
},{timestamps: true});//as the name says, it adds timestamps to the schema

module.exports = mongoose.model('Todo', todoSchema);