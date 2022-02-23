const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Problem=require('../models/problems');
const Discuss = require('../models/discuss')
const passport = require('passport');
const {isLoggedIn} = require('../middleware');

router.get('/signup',(req,res)=>{
    try{
        res.render('auth/signup');
    }    
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.post('/register',async(req,res)=>{
    try{
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
    }    
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.get('/login',(req,res)=>{
    try{
        res.render('auth/login');
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.post('/login',passport.authenticate('local',{ failureRedirect:'/login', failureFlash:true}),async(req,res)=>{
    try{
        req.flash('success',`Welcome back ${req.user.username} !!!!`);
        res.redirect('/problem');
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.get('/logout',(req,res)=>{
    try{
        req.logout();
        req.flash('success',"Logged Out!!!!");
        res.redirect('/problem');
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.get('/profile',isLoggedIn,async(req,res)=>{
    try{
        const user = await User.findById(req.user._id).populate('ans').populate('ques');
        const b=user.ans.length;
        const a=user.ques.length;
        res.render('problem/userdetail',{user,a,b});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

module.exports=router;