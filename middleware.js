
const {problemSchema,discussSchema} = require('./schema');

module.exports.problemValidate=(req,res,next)=>{
    const {topic,level,lang,statement,example} = req.body;
    const {error} = problemSchema.validate({topic,level,lang,statement,example});
    if(error){
        const msg = error.details.map((e)=>e.message).join(',');
        return res.status(500).render('error',{err:msg});
    }
    next();
}

module.exports.discussValidate=(req,res,next)=>{
    const {description,exp} = req.body;
    const {error} = discussSchema.validate({description,exp});
    if(error){
        const msg = error.details.map((e)=>e.message).join(',');
        return res.status(500).render('error',{err:msg});
    }
    next();
}
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error',"You need to login first");
        return res.redirect('/login');
    }
    next();
}