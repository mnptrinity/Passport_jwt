const {userSchema} = require('../schema/user');


userSchema.statics.findByEmail=function(email,callback){
    this.findOne({email:email},function(err,user){
        if(err){
            callback(err,null);
        }
        if(user){
            callback(null,user);
        }
        else{
            callback(null,false);
        }
    });
}