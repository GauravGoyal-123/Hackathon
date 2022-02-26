const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const {problemValidate,isLoggedIn} = require('../middleware');
const User = require('../models/user');
const passport = require('passport');

router.get('/problem',async(req,res)=>{
    try{
        const Prblm = await Problem.find({});
        var prblm = Prblm.reverse();
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
        const user = await User.findById(req.user._id);
        const prblm = new Problem({topic,level,lang,statement,example});
        user.ques.push(prblm);
        await prblm.save();
        await user.save();
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

router.get('/problem/difficulty/:diff',async(req,res)=>{
    try{
        const {diff} = req.params;
        const problem = await Problem.find({});
        const Prblm = problem.reverse(); 
        const prblm = Prblm.filter((p)=>p.level===diff);
        res.render('problem/difficulty',{prblm,diff});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
});

router.get('/problem/:topic',async(req,res)=>{
    try{
        const {topic}=req.params;
        const problem=await Problem.find({});
        const Prblm = problem.reverse(); 
        const prblm=Prblm.filter((p)=>p.topic.toUpperCase()===topic.toUpperCase());
        res.render('problem/topic',{prblm,topic});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
});
module.exports=router;