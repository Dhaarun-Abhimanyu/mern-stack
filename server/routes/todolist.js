const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({msg: "todo list"});
})

router.get('/:id', (req,res) => {
    res.json({msg: "yahello"});
})

router.post('/post', (req,res) =>{
    const {data} = req.body;
    res.status(201).json({msg:data});
    console.log(data);
})

router.delete('/:id', (req,res) =>{
    res.json({msg: "delete yahello"});
})

router.patch('/:id', (req,res) =>{
    res.json({msg: "update yahello"});
})

module.exports = router;