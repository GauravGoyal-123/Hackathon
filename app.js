if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}
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
const methodOverride = require('method-override');

const dburl = process.env.url || 'mongodb://localhost:27017/doubtaway';

mongoose.connect(dburl)
    .then(()=> console.log("DB connected"))
    .catch((err)=>console.log(err));


app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({urlencoded:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'))
    
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

const problemRouter = require('./routes/problem');
const discussRouter = require('./routes/discuss');
const userRouter = require('./routes/user');

app.use(problemRouter);
app.use(discussRouter);
app.use(userRouter);

app.get('/',(req,res)=>{
    res.render('home');
})
const port = 5000  || process.env.PORT;
app.listen(port,()=>{
    console.log("Server Connected");
})