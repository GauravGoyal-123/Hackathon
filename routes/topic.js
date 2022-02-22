const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');


router.get('/problem/array',async(req,res)=>{
    try{
        const problem=await Problem.find({});
        const prblm=problem.filter((p)=>p.topic==='Array');
        res.render('problem/topic',{prblm});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
    
});

router.get('/problem/string',async(req,res)=>{
    try{
        const problem=await Problem.find({});
        const prblm=problem.filter((p)=>p.topic==='String');
        res.render('problem/topic',{prblm});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }
    
});

module.exports=router;