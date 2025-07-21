const express = require('express')
const mongoose = require('mongoose')

const app = express();


const port = 3000;

app.get('/home', (req,res)=>{
    res.send('welcome server is running')
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})