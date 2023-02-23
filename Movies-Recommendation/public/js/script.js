
// console.log("in side public script");

async function searchDb(searchText){
    const res=await fetch(`http://localhost:5000/search?q =${searchText}`);
    const data=await res.json()
    console.log(data);
}

const searchInput=document.getElementById("userinput")
searchInput.addEventListener("keyup",()=>{
    let searchText=searchInput.value;
    console.log(searchText);
    searchDb(searchText)
})

// async function searchDb(searchText){
//     const res = await fetch(`http://localhost:5000/search?q=${searchText}`);
//      const data = await res.json()
//      console.log(data);
//  }
 
//  const searchInput = document.getElementById("searchinput")
//  searchInput.addEventListener("keyup",()=>{
//      let searchText = searchInput.value;
//      searchDb(searchText)
//  })