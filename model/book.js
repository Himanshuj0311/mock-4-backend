const mongoose=require("mongoose");
const BookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

const Book=mongoose.model("book",BookSchema);

module.exports = {Book};