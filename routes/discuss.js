const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const Discuss = require('../models/discuss');

router.post('/problem/:id/discuss',async(req,res)=>{
    const {id} = req.params; 
    console.log(req.body);
    const {description,exp} = req.body;
    const prblm = await Problem.findById(id);
    const dis = new Discuss({description,exp});
    prblm.discuss.push(dis);
    await dis.save();
    await prblm.save();
    console.log(dis);
    res.redirect(`/problem/${id}/discuss`);

})

router.get('/problem/:id/discuss',async(req,res)=>{
    const {id}=req.params;
    const prblm=await Problem.findById(id).populate('discuss');
    res.render('problem/discuss',{prblm});
})

router.get('/problem/discuss/:discuss_id',async(req,res)=>{
    const {discuss_id} = req.params;
    const prblmdis = await Discuss.findById(discuss_id);
    res.send(prblmdis);

})



module.exports=router;