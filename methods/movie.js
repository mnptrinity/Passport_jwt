const {movieSchema}=require('../schema/movie');

movieSchema.methods.iftoday = function(){
    var currentTime = new Date();
    var date=this.created;
    if(date.getMonth()==currentTime.getMonth()&&date.getDate()==currentTime.getDate()&&date.getYear()==currentTime.getYear())
        return "True";
    else
    return "false";
}


movieSchema.statics.Allgenre=function(genre_id,callback){
   this.find({genre:genre_id},callback).populate('genre',"name");
}
