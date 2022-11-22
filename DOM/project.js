var items = [];
if (localStorage.getItem("items") != null) {
  items = JSON.parse(localStorage.getItem("items"));
  items.forEach((item) => {
    display(item);
  });
}

form = document.getElementById("addForm");
form.addEventListener("submit", additem);
document.getElementById("items").addEventListener("click", remove);

function display(item) {
  li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${item}<button class="btn btn-danger btn-sm float-right delete">X</button>`;
  document.getElementById("items").appendChild(li);
}

function additem(e) {
  e.preventDefault();
  item = document.getElementById("item").value;
  li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${item}<button class="btn btn-danger btn-sm float-right delete">X</button>`;
  document.getElementById("items").appendChild(li);
  this.reset();
  items.push(item);
  console.log(items);
  localStorage.setItem("items", JSON.stringify(items));
}

function remove(e) {
  el = e.target;
  if (el.classList.contains("delete")) {
    p = el.parentElement;
    this.removeChild(p);
    v = p.innerText.substring(0, p.innerText.length - 1);
    items = items.filter((item) => item != v);
    localStorage.setItem("items", JSON.stringify(items));
  }
}

function search() {
  filter = document.getElementById("filter").value.toUpperCase();
  li = document.getElementsByTagName("li");
  Array.from(li).forEach((li) => {
    text = li.innerText.substring(0, li.innerText.length - 1);
    if (text.toUpperCase().indexOf(filter) == -1) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  });
}

// const themeColour=document.querySelector('[name="theme"]');
// //store theme
// const storeTheme= function(theme){
//     localStorage.setItem('theme',theme);
// }
// const applyTheme=function(){
//     const activeTheme=localStorage.getItem('theme');
//     themeColour.forEach((themeOption) => {
//         if(themeOption==theme){
//             themeOption.checked=true;
//         }
//     });
// }
// themeColour.forEach((themeOption) => {
//     themeOption.addEventListener('click',()=>{
//         storeTheme(themeOption.id);
//     })
// });
// document.onload=applyTheme();

// themes = document.querySelectorAll('[name="theme"]');
// themes.forEach((theme) => {
//   theme.addEventListener("click", () => store(theme));
// });
// function store(theme) {
//   localStorage.setItem("theme", theme.id);
// }
// function apply() {
//   storedtheme = localStorage.getItem("theme");
//   themes.forEach((theme) => {
//     if (theme.id === storedtheme) {
//       theme.checked = true;
//     }
//   });
// }
// document.onload = apply();