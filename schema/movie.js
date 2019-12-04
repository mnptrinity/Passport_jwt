const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const movieSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    genre:{
        type:Schema.Types.ObjectId,
        ref:'genre'
    },
    director:{
        type:String,
        required:true,
    },
    decsription:{
        type:String,
        default:"No Spoilers"
    },
    created:{
        type:Date,
        default:Date.now
    },
    movie:{
        type:String
    }
});





module.exports.movieSchema=movieSchema;
//exporting the genre methods
require('../methods/movie');
const Movie=mongoose.model('movie',movieSchema);
module.exports.Movie=Movie;