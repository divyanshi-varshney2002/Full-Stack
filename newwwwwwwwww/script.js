/*
const fs=require("fs");
function callback(err,data){
    if(!err){
        console.log(data)
    }
}
fs.readFile('html.html','utf-8',callback)
*/

for(let i=0;i<=10;i++){
    fs.readFile("file"+i+".html",'utf-8',callback);
}