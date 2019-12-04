const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    created:{
        type:Date,
        default:Date.now
    }
});


module.exports.userSchema=userSchema;
//exporting the user methods
require('../methods/users');

const User=mongoose.model('user',userSchema);
module.exports.User=User;