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


module.exports.deletemovie=(req,res)=>{
    Movie.findById(req.params.id).then(result=>{
        return res
        .status(200)
        .json({
            message:"Deleted successful...",
            Result:result
        });
    })
    .catch(err=>{
        return res
        .status(200)
        .json({
            message:"Movie Not Found!",
            Result:err
        });
    })
}


module.exports.allmovies=(req,res)=>{
        Movie.find().populate('genre').then(result=>{
        return res
        .status(200)
        .json({
            message:"Movie List : ",
            Result:result
        });
    })
    .catch(err=>{
        return res
        .status(200)
        .json({
            message:"Movie List Not Found ",
            Result:err
        });
    });
}



module.exports.deletemovie=(req,res)=>{
    Movie.findByIdAndDelete(req.params.id).then(result=>{
        return res
        .status(200)
        .json({
            message:"Movie Deleted Successfully.!",
            Result:result
        });
    })
    .catch(err=>{
        return res
        .status(200)
        .json({
            message:"Movie  Not Found ",
            Result:err
        });
    })
}


module.exports.updatedescription=(req,res)=>{
    Movie.findByIdAndUpdate(req.params.id,{$set :{
        decsription:req.body.decsription
    }},(err,data)=>{
        if(err)
        return res
        .status(200)
        .json({
            message:"Movie Not Found...!",
            Result:err
        })
        else
        return res
        .status(200)
        .json({
            message:"Movie Description Upated successfully!",
            Result:data
        })
    });
}


module.exports.updatemovie=(req,res)=>{
    Movie.findByIdAndUpdate(req.params.id,{$set :req.body},{upsert:true},(err,data)=>{
        if(err)
        return res
        .status(200)
        .json({
            message:"Movie Not Found...!",
            Result:err
        })
        else
        return res
        .status(200)
        .json({
            message:"Movie  Upated successfully!",
            Result:data
        })
    });
}