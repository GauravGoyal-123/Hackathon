const express=require('express');
const router=express.Router();
const User=require('../models/user');
const passport = require('passport');

router.get('/signup',(req,res)=>{
    res.render('auth/signup');
})

router.post('/register',async(req,res)=>{
    const {username,password,email} = req.body;
    const user = new User({username,email});
    const newUser = await User.register(user,password);
    req.login(newUser, function(err) {
        if (err){
            return next(err);
        }
        req.flash('success', 'Welcome , You are Registered Successfully');
        return res.redirect('/problem');
    });
})

router.get('/login',(req,res)=>{
    res.render('auth/login');
})

router.post('/login',passport.authenticate('local',{ failureRedirect:'/login', failureFlash:true}),async(req,res)=>{
    req.flash('success',"Welcome back!!!!");
    res.redirect('/problem');
})

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success',"You logout successfully!!!!");
    res.redirect('/problem');
})

module.exports=router;