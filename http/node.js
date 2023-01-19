const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url=='/home'){
        res.statusCode(500);
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }
    else if(req.url=='/contact'){
        res.write("welcome to contact page");
        res.end();
    }
    else{
        res.end("Error ! you are at wrong page");
    }
})
server.listen(7000);
console.log("server is running on port 7000");