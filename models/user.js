const mongoose = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
    },
    ans:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Discuss'

        }
    ],
    ques:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Problem'

        }
    ]
})
userSchema.plugin(passportLocalMongoose);
const User=mongoose.model('User',userSchema);

module.exports=User;