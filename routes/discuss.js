const express = require('express');
const router = express.Router();
const Problem = require('../models/problems');
const Discuss = require('../models/discuss');
const User = require('../models/user');
const {discussValidate,isLoggedIn} = require('../middleware');

router.post('/problem/:id/discuss',isLoggedIn,discussValidate,async(req,res)=>{
    try{
        const {id} = req.params; 
        const {description,exp} = req.body;
        const prblm = await Problem.findById(id);
        const userName = req.user.username;
        const userid = req.user._id;
        const problemid=id;
        const dis = new Discuss({description,exp,userName,userid,problemid});
        console.log(dis);
        const user = await User.findById(req.user._id);
        user.ans.push(dis);
        prblm.discuss.push(dis);
        await dis.save();
        await prblm.save();
        await user.save();
        req.flash('success',"Add a new answer successfully!!!!");
        res.redirect(`/problem/${id}/discuss`);
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    }  
})

router.get('/problem/:id/discuss',async(req,res)=>{
    try{
        const {id}=req.params;
        const prblm=await Problem.findById(id).populate('discuss');
        // const prblm = Prblm.reverse(); 
        res.render('problem/discuss',{prblm});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    } 
})

router.get('/problem/:id/discuss/:discuss_id',async(req,res)=>{
    try{
        const {id,discuss_id} = req.params
        const prblmdis = await Discuss.findById(discuss_id);
        res.render('problem/exp',{prblmdis,id});
    }
    catch(e){
        res.status(500).render("error",{err:e.message});
    } 
})



module.exports=router;