const express = require('express');
const app = express();
const path= require("path");
const port=3000;
app.set('view engine','ejs');
app.get('/home',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*10);
    res.render('index',{randomNumber});
})
app.set('views',path.join(__dirname,'views'))
app.listen(port,()=>{
  console.log(`server is running at ${port}`);
})