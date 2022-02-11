const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');

mongoose.connect('mongodb://localhost:27017/doubtaway')
    .then(()=> console.log("DB connected"))
    .catch((err)=>console.log(err));
    
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({urlencoded:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Welcome");
})

const problemRouter = require('./routes/problem');

app.use(problemRouter);

const port = 5000;
app.listen(port,()=>{
    console.log("Server Connected");
})