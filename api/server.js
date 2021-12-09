const express = require("express");
const carsRouter = require('./cars/cars-router');
const server = express();
server.use(express.json());


 server.use('/api/cars', carsRouter);
// DO YOUR MAGIC


server.use('*', (req, res,next) => { //catch all
    next({ status:404, message: 'not found!'})
})
//error handling middleware our own
server.use((err,req,res,next) => {//eslint-disable-line 
res.status(err.status || 500).json ({message:err.message})
})

module.exports = server
