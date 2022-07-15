var toggle=document.querySelector(".navbar-toggler")
var sideBar=document.querySelector("#sidebarMenu")
let menuOpen=false;
var navIcon=document.querySelectorAll(".nav-icon")
let isActive=false;
var membership=document.querySelector(".membership")
toggle.addEventListener('click',()=>{
    if(!menuOpen){
        sideBar.classList.add("show");
        menuOpen=true
    }
    else{
        sideBar.classList.remove("show");
        menuOpen=false
    }

})

for (let index = 0; index < navIcon.length; index++) {
    navIcon[index].addEventListener('click',()=>{
        if(!isActive){
            navIcon[index].classList.add("active");
            isActive=true;
        }
        else{
            navIcon[index].classList.remove("active");
            isActive=false;
        }
    })
}
membership.addEventListener('click',()=>{
    if(!isActive){
        membership.classList.add("active");
        isActive=true;
    }
    else{
        membership.classList.remove("active");
        isActive=false;
    }
})