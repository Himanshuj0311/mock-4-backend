const express = require("express");
const {connection}=require("./config/db");
const { BookRouter } = require("./routes/book")
const cors = require("cors");


require("dotenv").config();
const port = process.env.PORT || 8080;
const app=express();
app.use(express.json());
app.use(cors());

app.use('/book',BookRouter)


app.listen(port,async()=>{
    try {
        await connection
        console.log("Server listening on port "+port)
        
    } catch (error) {
        console.log(error)
    }
})
