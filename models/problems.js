const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    topic:{
        type:String,
        trim:true
    },
    lang:{
        type:String,
        trim:true,
    },
    level:{
        type:String,
        trim:true
    },
    statement:{
        type:String,
        trim:true
    },
    example:{
        type:String,
        trim:true,
    },
    discuss:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Discuss'

        }
    ]
});

const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;