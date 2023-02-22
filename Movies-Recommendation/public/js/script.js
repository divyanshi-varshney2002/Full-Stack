
// console.log("in side public script");

function searchDb(){
    fetch(`http://localhost:5000/search?q =${searchText}`)
}

const searchInput=document.getElementById("userinput")
searchInput.addEventListener("keyup",()=>{
    let searchText=searchInput.value;
    console.log(searchText);
})