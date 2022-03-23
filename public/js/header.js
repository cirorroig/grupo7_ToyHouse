const navToggle= document.querySelector(".toggle-menu")
const navMenu= document.querySelector(".navigation")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("navigation-active")
})