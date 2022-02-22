const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const {problemValidate,isLoggedIn} = require('../middleware');
const User = require('../models/user');
const passport = require('passport');

router.get('/problem',async(req,res)=>{
    try{
        const prblm = await Problem.find({});
        prblm.sort(function(x, y){
            return x.timestamp - y.timestamp;
        })
        res.render('problem/index',{prblm});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
    
})

router.get('/newproblem',isLoggedIn,(req,res)=>{
    try{
        res.render('problem/newproblem');
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
    
});

router.post('/problem',problemValidate,async(req,res)=>{
    try{
        const {topic,level,lang,statement,example} = req.body;
        // await Problem.create({topic,level,lang,statement,example});
        const user = await User.findById(req.user._id);
        const prblm = new Problem({topic,level,lang,statement,example});
        user.ques.push(prblm);
        await prblm.save();
        await user.save();
        // console.log(user);
        req.flash('success',"Add a new problem successfully!!!!");
        res.redirect('/problem');
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.get('/problem/:id/answer',async(req,res)=>{
    try{
        const {id}=req.params;
        const prblm=await Problem.findById(id);
        res.render('problem/show',{prblm});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
})

router.get('/problem/easy',async(req,res)=>{
    const problem = await Problem.find({});
    const prblm = problem.filter((p)=>p.level.toUpperCase()==='EASY');
    res.render('problem/difficulty',{prblm});
})

router.get('/problem/medium',async(req,res)=>{
    const problem = await Problem.find({});
    const prblm = problem.filter((p)=>p.level.toUpperCase()==='MEDIUM');
    res.render('problem/difficulty',{prblm});
})

router.get('/problem/hard',async(req,res)=>{
    const problem = await Problem.find({});
    const prblm = problem.filter((p)=>p.level.toUpperCase()==='HARD');
    res.render('problem/difficulty',{prblm});
})
module.exports=router;