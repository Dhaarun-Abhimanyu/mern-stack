const express = require('express');
const app = express();
require('dotenv').config();
const todoRoutes = require('./routes/todolist.js');
const mongoose = require('mongoose');

//middleware
app.use(express.json());//lets u use req.body

/*
app.use( (req,res,next) => {
    console.log(req.path, req.method);
    next();
})
*/

app.use('/api/todolist', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log(`Server running at http://localhost:${process.env.PORT}/`);
        })
    })
    .catch((error) => {
        console.log("Error - Can't connect to Mongoose")
    });