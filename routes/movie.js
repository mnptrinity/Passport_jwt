var express = require('express');
var router = express.Router();
var passport=require('passport');


var movieController=require('../controller/movie');

router.post('/newmovie',passport.authenticate('jwt',{session:false}),function(req,res){
     movieController.createNewMovie(req.body,function(err,newmovie){
       if(err) 
       res.json({
         success:false,
         message:"Duplicate Movie Name...Movie name already exists...!"
       });
       if(newmovie){
         res.json({
           success:true,
           message:"New Movie Created Successful!",
           Movie:newmovie
         });
       }
     });
})



router.post('/:id',passport.authenticate('jwt',{session:false}),function(req,res){
  var id=req.params.id;
  movieController.Today(id,res);
});


router.post('/movie_genre/:id',passport.authenticate('jwt',{session:false}),function(req,res){
  var id=req.params.id;
  movieController.gettinggenre(id,res);
})


module.exports = router;
