const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

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
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
    }
}

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})

app.get('/',(req,res)=>{
    res.render('home');
})

const problemRouter = require('./routes/problem');
const discussRouter = require('./routes/discuss');
const userRouter = require('./routes/user');
const { date } = require('joi');

app.use(problemRouter);
app.use(discussRouter);
app.use(userRouter);

const port = 5000;
app.listen(port,()=>{
    console.log("Server Connected");
})