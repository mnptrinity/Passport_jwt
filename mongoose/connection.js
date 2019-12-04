var mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoose_URL,{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log("Mongoose Connected!");
});
mongoose.connection.on('error',()=>{
    console.log("Error in Mongoose Connection!");
});
mongoose.connection.on('disconnected',()=>{
    console.log("Mongoose Disconnected !");
});

