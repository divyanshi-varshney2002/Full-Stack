const express = require('express');
const app = express();
const port=5000;
app.listen(port,()=>{
  console.log(`server is running at ${port}`);
})
// app.use((req,res)=>{
//   res.send(`server running`);
// })
app.get('/', (req, res)=>{
  res.send('<h1>Welcome to Express</h1>');
  res.send('hello world this is express by --Divyanshi Varshney');
})
app.get('/r/:subreddit', (req, res)=>{
  console.log(req.params);//path parameter
  const {subreddit} =req.params;
  res.send(`<h1 style="text-align:center ; color:red">You are watching ${subreddit}</h1>`);
  // res.send('hello world this is express by --Divyanshi Varshney');
})
app.get('/search',(req,res)=>{
  console.log(req.query)//string parameter
  const {q}=req.query;
  res.send(`Jai shri Ram from ${q}`);
})
app.get('*',(req,res)=>{
  res.send("you at wrong page !");
})
// console.log("Using Express --Divyanshi Varshney");
// app.listen(3000);
