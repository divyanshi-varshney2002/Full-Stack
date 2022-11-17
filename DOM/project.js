const themeColour=document.querySelector('[name="theme"]');
//store theme
const storeTheme= function(theme){
    localStorage.setItem('theme',theme);
}
const applyTheme=function(){
    const activeTheme=localStorage.getItem('theme');
    themeColour.forEach((themeOption) => {
        if(themeOption==theme){
            themeOption.checked=true;
        }
    });
}
themeColour.forEach((themeOption) => {
    themeOption.addEventListener('click',()=>{
        storeTheme(themeOption.id);
    })
});
document.onload=applyTheme();