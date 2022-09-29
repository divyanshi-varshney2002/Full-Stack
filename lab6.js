// alert(NaN**0);
// alert(NaN**1);
// alert(NaN**2);
// console.log(typeof(NaN));
// let is_greater =4>1;
// alert(is_greater);
// alert(typeof is_greater);
// console.log(typeof(null));

// let a=prompt('how old are you?',19);
// alert(`you are  ${a} years old`);

// is_greater= confirm('is 4 greater than 1');
// alert(is_greater);

// let x='31';
// console.log(typeof x);
// x=Number(x);//type conversion by using constructor
// x+=1;
// alert(x);

// let n=2;
// console.log(++n);
// console.log(n++);
// console.log(n);
// console.log(0==0||0&&3);

// let age=prompt("how old r u? ");
// if(age>18){
//     alert("u r adult");
// }
// else if(age>14){
//     alert("u r teenager");
// }
// else{
//     alert("u r kid");
// }0
// alert(age>100?confirm("kya tum bhoot ho?"):"tum insaan ho..");
// for(let i=0;i<3;i++){
//     alert(i);
// }
let sum=0;
let a;
for(let i=0;i<1000;i++){
    a=prompt();
    if(a=='0'||a==null) break;
    a=Number(a);
    sum=sum+a;
}
alert(sum);