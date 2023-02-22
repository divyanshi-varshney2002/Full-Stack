const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/seriesDB")
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public","js")))

app.get("/",(req,res)=>{
    res.render("index");
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})