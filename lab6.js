// alert(NaN**0);
// alert(NaN**1);
// alert(NaN**2);
console.log(typeof(NaN));
let is_greater =4>1;
// alert(is_greater);
// alert(typeof is_greater);
console.log(typeof(null));

let a=prompt('how old are you?',19);
alert(`you are  ${a} years old`);

is_greater= confirm('is 4 greater than 1');
alert(is_greater);

let x='31';
console.log(typeof x);
x=Number(x);//type conversion by using constructor
x+=1;
alert(x);