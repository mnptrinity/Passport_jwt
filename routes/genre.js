var express = require('express');
var router = express.Router();
var genreController=require('../controller/genre');
var passport=require('passport');

router.post('/newgenre',passport.authenticate('jwt',{session:false}),function(req,res){
  genreController.createNewGenre(req.body,function(err,genre){
    if(err) throw err;
    else{
      res.json({
        success:true,
        message :" Genre Successfully created!",
        Genre:genre
      });
    }
  });
});




module.exports = router;
