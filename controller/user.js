const {User} = require('../schema/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config();

module.exports.createNewUser=function(user,callback){

    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(user.password,salt,function(err,hash){
            if (err) throw err;
             user.password=hash;
             const newuser=new User(user);
             newuser.save(callback);
        });
    });
}


module.exports.login=function(user,callback){

    var password=user.password;
    User.findOne(user.email,function(err,user){
        if(err) {
            callback(err);
         }
        if(user)
        {
            console.log("Checking the user pssword.........");
            bcrypt.compare(password,user.password,function(err,isMatch){
                if(err) throw err;
                if(isMatch)
                {
               const token = jwt.sign(user.toJSON(), process.env.secret, { expiresIn: 604800  });
               user['token']=token;
                console.log(token);
                callback(null,user);
                }
                else{
                    callback(null,null);
                }
            });
        }
        else{
            callback(false,false);
        }

    });
}