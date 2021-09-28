var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var close = document.querySelector(".closeIcon");
var nav = document.querySelector(".navIcon");

ham.addEventListener("click", toggleMenu);

menu.classList.contains("showMenu");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        close.style.display = "none";
        nav.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        close.style.display = "block"
        nav.style.display = "none"
    }
}

var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu);
    }
)