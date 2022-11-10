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
/*
let a =true;
setTimeout(function(){
    a=false;
},10000);
while(a){
    console.log("hello");
}
*/
/*
let a =true;
setInterval(function(){
    while(a){
    console.log("hello");
    }
},1000);
setTimeout(function(){
    a=false;
},10500);
*/
/*
const p=new Promise((function(resolve,reject){
    setTimeout(()=>{
        let randomNum=Math.floor(Math.random()*10);
        console.log(randomNum);
        if(randomNum%2==0){
            resolve(randomNum);
        }
        else{
            reject();
        }
    },100)
}))
p.then((data)=>{
    console.log(data);
    console.log("resolved");
}).catch((err)=>{
    console.log(err);
    console.log("rejected");
})
*/

const fs=require("fs");
// const { resolve }=require("path");
// let readFilePromise=fs.promises.readFile("file1.html","utf-8");
// // console.log(readFilePromise);
// // resolve(readFilePromise)
// readFilePromise.then((data)=>{
//     console.log(data)
// })
// async function abc(){
// let data=await fs.promises.readFile("file1.html","utf-8");
// console.log(readFilePromise);
// return data;
// }
// abc();

// async function abc () {
//     await fs.promises.writeFile("file1.html", "hello123456789");
//     let data = await fs.promises.readFile("file2.html", "utf-8");
//     console.log(data);
//     return "how are you";
// }

async function main() {
    let data = await abc();
    console.log(data);
}
abc();
function abc() {                                             
    return new Promise(function (res, rej) {
        fs.promises.readFile("file1.html", "utf-8").then(function (data) {
            console.log(data);
            res("resolve");
        })
    })
}
