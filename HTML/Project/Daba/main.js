const menu = document.querySelector(".mob-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closeIcon");
const nav = document.querySelector(".navIcon");
const main = document.getElementById("main")

hamburger.addEventListener("click", toggleMenu);

menu.classList.contains("showMenu");

function toggleMenu() {

    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        close.style.display = "none";
        nav.style.display = "block";
        menu.style.width = "0";
        menu.style.height = "0";
        
    } else {
        menu.classList.add("showMenu");
        close.style.display = "block";
        nav.style.display = "none";
        menu.style.width = "115rem";
        menu.style.height = "151rem";
    }

}
