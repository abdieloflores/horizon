let nav = document.getElementById("nav");
let logo = document.getElementById("logo");
let nav2 = document.getElementById("nav2");

window.addEventListener("scroll", e=>{
    if(window.scrollY > 100){
        nav.className = "navbar fixed-top navbar-dark bg-dark navbar-expand-lg navbar-template"
        logo.className = "navbar-brand"
        nav2.className = "navbar-nav ml-auto"

    }else{
        nav.className = "navbar fixed-top navbar-light bg-white navbar-expand-lg navbar-template"
        logo.className = "navbar-brand d-none"
        nav2.className = "navbar-nav m-auto"
    }
});