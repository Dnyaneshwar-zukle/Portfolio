// sticky Navigation menu js//


let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display="block";
    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display="none";
    }
}
//Side nevigation
let  body = document.querySelector("body");
let  NavBar = document.querySelector(".Navbar");
let  menuBtn = document.querySelector(".menu-btn");
let  cancleBtn = document.querySelector(".cancle-btn");
menuBtn.onclick = function() {
    NavBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvent = "block";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvent = "block";
}

