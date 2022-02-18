const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const {problemValidate,isLoggedIn} = require('../middleware');

router.get('/problem',async(req,res)=>{
    try{
        const prblm = await Problem.find({});
        // time stamp;
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
        await Problem.create({topic,level,lang,statement,example});
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



router.get('/problem/array',async(req,res)=>{
    try{
        const problem=await Problem.find({});
        const array=problem.filter((p)=>p.topic==='Array');
        res.send(array);
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
    
})

module.exports=router;