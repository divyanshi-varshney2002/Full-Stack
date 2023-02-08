const express=require("express");
const app=express();
const path=require("path")
app.set('view engine', 'ejs');

// if path  is not set,
// set path of views folder
// no need to run js file from the directory where views folder is present



app.set('views',path.join(__dirname,'views','partials'));
app.set('views',path.join(__dirname,'views'))



const todos =["football","Coding","Playing"];
app.get('/todo',(req,res)=>{
    res.render('todos',{todos})
})


// to use static files like css ,js here
//middleware function 'static'
app.use(express.static(path.join(__dirname,'public')))
app.get('/home',(req,res)=>{
    const randomNumber =Math.floor(Math.random()*10);
    res.render('index',{randomNumber})
    // res.render('index')
})
app.listen(3000,()=>{
    console.log("Server is running");
})