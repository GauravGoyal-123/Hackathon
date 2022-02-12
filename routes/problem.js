const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');

router.get('/problem',async(req,res)=>{
    const prblm = await Problem.find({});
    res.render('problem/index',{prblm});
})

router.get('/newproblem',(req,res)=>{
    res.render('problem/newproblem')
});

router.post('/problem',async(req,res)=>{
    const {topic,level,lang,desc} = req.body;
    await Problem.create({topic,level,lang,desc});
    res.redirect('/problem');
})

router.get('/problem/:id/answer',async(req,res)=>{
    const {id}=req.params;
    const prblm=await Problem.findById(id);
    res.render('problem/show',{prblm});
})

router.get('/problem/:id/discuss',async(req,res)=>{
    const {id}=req.params;
    const prblm=await Problem.findById(id);
    res.render('problem/discuss',{prblm});
})

router.get('/problem/array',async(req,res)=>{
    const problem=await Problem.find({});
    const array=problem.filter((p)=>p.topic==='Array');
    res.send(array);
})

module.exports=router;