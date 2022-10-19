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
// let sum=0;
// let a;
// for(let i=0;i<1000;i++){
//     a=prompt();
//     if(a=='0'||a==null) break;
//     a=Number(a);
//     sum=sum+a;
// }
// alert(sum);

/*
let num=255;
console.log(num.toString(6));
let num2=12.47756;
console.log(num2.toFixed(3));
console.log(parseFloat('12.356765432em'));
let str='this is a string';
console.log(str);
console.log(str[5]);
console.log(str.charAt(3));
console.log(str.at(-3));
console.log(str.indexOf('is'));
console.log(str.slice(0,-3));
console.log(str.slice(-5,-3));
console.log(str.substring(11,9));
console.log(str.substring(4,9));
*/

/************Arrays**************/

// let a =new Array();
// console.log(a);

// let a2 =new Array(5);
// console.log(a2);

// let arr=[1,2,3,4,5];
// console.log(arr);

// let arr2 =[1,2,3,4,'apple','mango',true,function(){alert('hello world')}];
// // console.log(arr2[7]());
// console.log(arr2);
// console.log(arr2.pop());
// console.log(arr2.push('strawberry'));
// console.log(arr2.shift());
// console.log(arr2.unshift(2,46,34,67));
// console.log(arr2);

// console.log([2]==[2]);

/*
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let sum=0;
let arr2=new Array();
let k=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        console.log(`${i} ${j}`)
        sum+=arr[i][j];
        // arr2.push(arr[i][j]);
        arr2[k++]=arr[i][j];
    }
}
console.log(sum);
console.log(arr2);
*/

// let arr=['apple','mango','banana'];
// delete arr[1];
// arr.splice(1,1,'grapes');
// console.log(arr);
// arr.forEach(alert);

// let n=eval(prompt());
// if(n%2==0) console.log('even');
// else console.log('odd');

/*
let str="This is dev class";
console.log(str);
let arr=str.split(' ');
console.log(arr);
let ans="";
// let i=0;
// arr.forEach(console.log(arr[i++]));
arr.forEach(element => {
    
    for(let i=element.length-1;i>=0;i--){
        ans+=element[i];
        // console.log(ans);
    }
    // arr.push(ans);
    ans+=" ";
});
// str=arr.join();
// console.log(str)
ans.trim();
console.log(ans);

let s="background-color-red";
let a=s.split("-");
// console.log(a);
a.forEach(i => {
    i[0]=i[0].toUpperCase;
    console.log(i[0]);
    
})
let s1=a.join("");
console.log(s1);
*/

/*
let obj={
    'name':'john',
    "hello":1,
    "hello1":2,
    wel:function(){
        console.log('wlcome function')
    },
}
console.log(obj);
console.log(obj.name);
console.log(obj['hello1']);
console.log(Object.keys(obj))
console.log(Object.values(obj))
*/

// let str="aabc bbca caab ddac"
// let obj={}
// for(let i=0;i<str.length;i++){
//     if(!obj[str.charAt(i)]){
//         obj[str.charAt(i)]=1
//     }
//     else obj[str.charAt(i)]++;
// }
// for(let i of str){
//     if(!obj[i]){
//         obj[i]=1;
//     }
//     else obj[i]++;
// }
// console.log(obj);

let person={
    firstname:"john",
    age: 24
}
let p1=Object.create(person);
console.log(person)
console.log(p1.firstname)
p1['firstname']='senta';
let p2={
    isadult:true,
    __proto__:p1
}
console.log(p2);