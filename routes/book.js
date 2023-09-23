const express = require("express");
const {Book} = require("../model/book");
const BookRouter = express.Router();

//Add Book

BookRouter.post("/add",async(req,res)=>{
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(200).json({"book":book})
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})

//Get All Book

BookRouter.get("/",async(req,res)=>{
    try {
        // const query={};
        // if(res.query.genre){
        //     query.genre = req.query.genre;
        // }

        // const sort={};
        // if(req.query.sortByPrice){
        //     sort.price=req.query.sortByPrice
        // };

        const book=await Book.find()
        //(query).sort(sort)
       
        res.status(200).json({"book":book})
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})

//Delete Book

BookRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
       if(!book)return res.status(400).send("Book not found")
        res.status(200).json("Book deleted Successfull")
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})


//Filter Book

BookRouter.get("/filter",async(req,res)=>{
    try {

        const book=await Book.find({genre: req.query.genre});
        //(query).sort(sort)
       
        res.status(200).json({"book":book})
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})


//Sort Book

BookRouter.get("/sort",async(req,res)=>{
    const {price}=req.params;
    try {
        
       // sort[req.query.sortBy]=req.query.order;

        const book=await Book.find().sort({price:1});
        //(query).sort(sort)
       
        res.status(200).json({"book":book})
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})


module.exports = {BookRouter}