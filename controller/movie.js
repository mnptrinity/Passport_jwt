const {Movie} = require('../schema/movie');

module.exports.createNewMovie=function(movie,callback){
    const newmovie=new Movie(movie);
    newmovie.save(callback);
}


module.exports.Today=function(req,res){
    Movie.findOne({_id:req}).exec((err,user)=>{
        if(err) {
            res.json({
                success:false,
                message:"Movie Not Found!"
            });
        }
        if(user){
            res.json({
                success:true,
                message:"Movie Found...",
                Result : "Released Today : "+user.iftoday()
            });
        }
    })
}


module.exports.gettinggenre=function(genre_id,res){
    Movie.Allgenre(genre_id,function(err,movies){
        if(err){
              res.json({
                  success:false,
                  message:"No Genre is Found in the Movies..."
              });
        }
        if(movies){
            res.json({
                success:true,
                message:" Genere is Found in the Movies...",
                result:movies
            })
        }
    });
}