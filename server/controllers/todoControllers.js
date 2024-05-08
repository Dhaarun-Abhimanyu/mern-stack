const todoModel = require('../models/todolistModels.js')
//const mongoose = require('mongoose');
//get all todos
const getTodo = async(req,res) => {
    try{
        const todo = await todoModel.find({}).sort({createdAt: -1});
        res.status(200).json(todo)
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//get one todo
const getOneTodo = async(req,res) => {
    try{
        const todo = await todoModel.findById({_id: req.params.id});
        /*
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'Invalid ID'})
        }
        Usually mongoose would throw an error if the id is not a string of 12 bytes or of 24 hex characters, but here it works for some reason(maybe got patched)
        adding the condition here in case that error is thrown
        also, do ths before using findById()
        */
        if(!todo){
            return res.status(404).json({error: 'No such Todo'});//return is used to stop the execution of the function
        }
        res.status(200).json(todo);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//create a todo
const createTodo = async(req,res) => {
    const {title, number, activity} = req.body;

    try{
        const todo = await todoModel.create({title, number, activity});
        res.status(200).json(todo);//this is asynchronous
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//delete a todo
const deleteTodo = async(req,res) => {
    try{
        const todo = await todoModel.findOneAndDelete({_id: req.params.id});
        if(!todo){
            return res.status(404).json({error: 'No such Todo'});
        }
        res.status(200).json(todo);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//update a todo
const updateTodo = async(req,res) => {
    try{
        const todo = await todoModel.findOneAndUpdate({_id: req.params.id},
        req.body);//mioght need to use spread-> ...req.body, but it still works

        if(!todo){
            return res.status(404).json({error: 'No such Todo'});
        }
        res.status(200).json(todo);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createTodo,
    getTodo,
    getOneTodo,
    deleteTodo,
    updateTodo,
}