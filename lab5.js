function first(){
    console.log("first.........");
    second();
}
function second(){
    console.log("second.........");
    third();
}
function third(){
    console.log("third.........");
}
first();
second();
third();

let $_=225;
console.log($_);
console.log(`age=${$_}`);
console.log(typeof($_));