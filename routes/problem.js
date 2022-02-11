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
    const {topic,level,desc} = req.body;
    await Problem.create({topic,level,desc});
    res.redirect('/problem');
})

module.exports=router;