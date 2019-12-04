const {Genre} = require('../schema/genre');

module.exports.createNewGenre=function(genre,callback){
    const newgenre=new Genre(genre);
    newgenre.save(callback);
}