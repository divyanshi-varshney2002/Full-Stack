const express = require('express');
const app = express();
const path= require("path");
const port=3000;
app.set('view engine','ejs');
app.get('/home',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*10);
    res.render('index',{randomNumber});
})
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'views'))
app.listen(port,()=>{
  console.log(`server is running at ${port}`);
})
const todos=["playing","reading","cooking","dancing"];
app.get('/todos',(req,res)=>{
  res.render('todos',{todos})
})