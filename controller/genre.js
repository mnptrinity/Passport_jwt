const {Genre} = require('../schema/genre');

module.exports.createNewGenre=function(genre,callback){
    const newgenre=new Genre(genre);
    newgenre.save(callback);
}


module.exports.delete=function(req,res){
    Genre.findByIdAndRemove(req.params.id,err=>{
        if(err)
        return res
        .status(200)
        .json({
            message:"Error In Deletion..."
        })
        else 
        return res
        .status(200)
        .json({
            message:"Successfully Deleted..!"
        });
        
    });
}



module.exports.update=function(req,res){
    Genre.findByIdAndUpdate(req.params.id,{$set: {
                         name :req.body.name}},{upsert:true,new:true},(err,data)=>{
            if(err)
            return res
            .status(200)
            .json({
                message:"Error in Updation!"
            });
            else
            return res
            .status(200)
            .json({
                message:"Successfully get updated!",
                data:data
            });
    })
}


module.exports.getallgenre=(req,res)=>{
    Genre.find().exec((err,data)=>{
        if(err)
        return res
        .status(200)
        .json({
            message:"There is no genre is present !"
        });
        else
         return res
         .status(200)
         .json({
             messaeg:"The Genre present are...",
             Genre:data
         })
    });
}