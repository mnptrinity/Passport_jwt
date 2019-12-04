var express = require('express');
var router = express.Router();
var passport=require('passport');
var userController=require('../controller/user');


router.post('/newuser',function(req,res){
    userController.createNewUser(req.body,function(err,user){
    if(err){
        res.json({
            success:false,
            message:"User Email Already Exists"
        })
    }
    else{
      res.json({
        success:true,
        message :" New User Successfully created!",
        User:user
      });
    }
  });
});


router.post('/login',function(req,res){
       userController.login(req.body,function(err,user){
           if(err){
            res.json({
                success:false,
                message:"Error In Routing..."
            })
           }
           if(user){
            res.json({
              success:true,
              message :" User Logged in Successful!",
              User:user
            });
          }
          else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            });
          }
       })
});


router.get('/profile',passport.authenticate('jwt',{session:false}),function(req,res){
    res.json({message:"hello"});
});



module.exports=router;