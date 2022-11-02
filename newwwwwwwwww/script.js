/*
const fs=require("fs");
function callback(err,data){
    if(!err){
        console.log(data)
    }
}
fs.readFile('html.html','utf-8',callback)
*/
/*
const fs=require("fs");
function callback(err,data){
    if(!err){
        console.log(data)
    }
}
for(let i=0;i<=10;i++){
    fs.readFile("file"+i+".html",'utf-8',callback);
}
*/
/*
const fs = require("fs");
let count = 0;
function callback(err, data) {
  count+=1;
  if (count <= 10) {
    if (!err) {
      console.log(data);
    } else console.log(err);
  }
  fs.readFile("file" + (count + 1) + ".html", "utf-8", callback);
}
fs.readFile("file1.html", "utf-8", callback);
*/

let a =true;
setTimeout(function(){
    a=false;
},10000);
while(a){
    console.log("hello");
}