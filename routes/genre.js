var express = require('express');
var router = express.Router();
var genreController=require('../controller/genre');
var passport=require('passport');

//inserting the new genre....
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


//deleting the genre with help of the ID:
router.delete('/deletegenre/:id',passport.authenticate('jwt',{session:false}),genreController.delete);
//updating the name of the genre...
router.put('/updategenre/:id',passport.authenticate('jwt',{session:false}),genreController.update);
//getting the all genre...
router.get('/allgenre',genreController.getallgenre);


module.exports = router;
