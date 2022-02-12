const mongoose = require('mongoose');

const discussSchema = mongoose.Schema({
    description:{
        type:String,
        trim:true,
    },
    exp:{
        type:String,
        trim:true,
    }
});

const Discuss = mongoose.model('Discuss',discussSchema);
module.exports=Discuss;