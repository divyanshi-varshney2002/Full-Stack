const express=require('express');
const app=express();
// app.listen();
port=5501;

// app.use((req,res)=>{
//     console.log("server starting request");
// })
console.log("I love u");
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1 style ="text-align:center">WelCome To the Express</h1>`);
    console.log("HiHI");
})

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    const {subreddit} =req.params;
    res.send(`<h1 style ="text-align:center ; color:red">U are watching Dynamic responses ${subreddit}</h1>`);

})
app.get('/search',(req,res)=>{
    console.log(req.query);
    const {q}=req.query;
    res.send(`<h1 style ="text-align:center ; color:blue">Jai shree krishna ${q}</h1>`)
})
//for error wale routs
app.get('*',(req,res)=>{
    res.send(`<h1 style ="text-align:center ; color:pink">OH! U are at wrng page</h1>`);
})
