var express = require('express');
var router = express.Router();
var passport=require('passport');


var movieController=require('../controller/movie');


//insertig the new movie...
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


//finding the movie whether is released today or not...
router.post('/:id',passport.authenticate('jwt',{session:false}),function(req,res){
  var id=req.params.id;
  movieController.Today(id,res);
});



//finding  all the movie with the genre with the populate...
router.post('/movie_genre/:id',passport.authenticate('jwt',{session:false}),function(req,res){
  var id=req.params.id;
  movieController.gettinggenre(id,res);
})




//deleting the movie with its ID...
router.post('/deletemovie/:id',passport.authenticate('jwt',{session:false}),movieController.deletemovie);

//to get all the movies...
router.get('/getallmovie',movieController.allmovies);

//to delete the movie with its ID...
router.delete('/deletemovie/:id',passport.authenticate('jwt',{session:false}),movieController.deletemovie);


//to update the description of the movie ...
router.put('/updatedescription/:id',passport.authenticate('jwt',{session:false}),movieController.updatedescription);

//updating the entire movie...
router.put('/updatemovie/:id',passport.authenticate('jwt',{session:false}),movieController.updatemovie);

module.exports = router;
