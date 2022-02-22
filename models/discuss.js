const mongoose = require('mongoose');

const discussSchema = mongoose.Schema({
    description:{
        type:String,
        trim:true,
    },
    exp:{
        type:String,
        trim:true,
    },
    userName:{
        type:String,
    },
    problemid:{
        type:String,
    }
},{timestamps:true});

const Discuss = mongoose.model('Discuss',discussSchema);
module.exports=Discuss;