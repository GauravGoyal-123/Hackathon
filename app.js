const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/doubtaway')
    .then(()=> console.log("DB connected"))
    .catch((err)=>console.log(err));


app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({urlencoded:true}));
app.use(express.static(path.join(__dirname,'public')));
    
const sessionConfig = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionConfig));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})

app.get('/',(req,res)=>{
    res.send("Welcome");
})

const problemRouter = require('./routes/problem');
const discussRouter = require('./routes/discuss');
const userRouter = require('./routes/user');

app.use(problemRouter);
app.use(discussRouter);
app.use(userRouter);

const port = 5000;
app.listen(port,()=>{
    console.log("Server Connected");
})