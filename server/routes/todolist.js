const express = require('express');

const {
    createTodo,
    getTodo,
    getOneTodo,
    deleteTodo,
    updateTodo,
} = require('../controllers/todoControllers.js');

const router = express.Router();

router.get('/', getTodo);//get all

router.get('/:id', getOneTodo);//get one

router.post('/post',createTodo);//create one

router.delete('/:id', deleteTodo);//delete one

router.patch('/:id', updateTodo);//update one

module.exports = router;