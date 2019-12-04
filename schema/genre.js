const mongoose=require('mongoose');

const genreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    movie:{
        type:String
    }
});


module.exports.genreSchema=genreSchema;
//exporting the genre methods
require('../methods/genre');

const Genre=mongoose.model('genre',genreSchema);
module.exports.Genre=Genre;