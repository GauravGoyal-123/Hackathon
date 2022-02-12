const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const Discuss = require('../models/discuss');

// router.post('/problem/:id/discuss',async(req,res)=>{

// })

router.get('/problem/:id/discuss',async(req,res)=>{
    const {id}=req.params;
    const prblm=await Problem.findById(id);
    res.render('problem/discuss',{prblm});
})





module.exports=router;