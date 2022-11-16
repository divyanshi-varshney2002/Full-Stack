// // console.log(document.all[12].innerText)
// let header=document.getElementById('header-title');
// header.style.backgroundColor='black';
// header.innerText='Good Morning.....';
// header.innerHTML='<h4>Welcome to the visual world....</h4>';
// console.log(header);

// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// for(let i=0;i<items.length;i++){
//     // items[i].style.backgroundColor='lightgrey';
//     Object.assign(items[i].style,{backgroundColor:'lightblue',fontWeight:'bold'})
// }

// var head=document.querySelectorAll('.title');
// for(let i=0;i<head.length;i++){
//     head[i].style.backgroundColor='green';
// }

// var heading=document.querySelector('.title');
// heading.style.backgroundColor='olive';

var button=document.querySelector('#btn');
button.addEventListener('click',runEvent);
button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent);
button.addEventListener('mouseup',runEvent);
function addEvent(){
    // console.log('1');
    var mainTitle=document.getElementById('main-header');
    console.log(mainTitle);
    mainTitle.innerText='changed';
}
var form =document.getElementById('addForm');
form.addEventListener('submit',runEvent);
function runEvent(e){
    // e.preventDefault();
    // console.log("Event Type:"+e.target.value);
    console.log("Event Type:"+e.type);
    // console.log('1');
}

