const express = require('express');
const todoModel = require('../models/todolistModels.js')

const router = express.Router();

router.get('/', (req,res) => {
    res.json({msg: "todo list"});
})

router.get('/:id', (req,res) => {
    res.json({msg: "yahello"});
})

router.post('/post',async (req,res) =>{
    const {title, number, activity} = req.body;

    try{
        const todo = await todoModel.create({title, number, activity});
        res.status(200).json(todo);//this is asynchronous
    }catch(error){
        res.status(400).json({error: error.message});
        console.log(error);
    }
})

router.delete('/:id', (req,res) =>{
    res.json({msg: "delete yahello"});
})

router.patch('/:id', (req,res) =>{
    res.json({msg: "update yahello"});
})

module.exports = router;