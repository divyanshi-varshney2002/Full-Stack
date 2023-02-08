const express=require("express");
const app=express();
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//middleware
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("index");
})
app.post('/user',(req,res)=>{
    res.send("Urasdayx");
})

app.listen(5000,()=>{
    console.log("App is listening");
})