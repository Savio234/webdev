const menu = document.querySelector(".mob-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closeIcon");
const nav = document.querySelector(".navIcon");

hamburger.addEventListener("click", toggleMenu);


function toggleMenu() {
    if (menu.classList.contains("navMenu")) {
        menu.classList.remove("navMenu");
        close.style.display = "none";
        nav.style.display = "block";
        menu.style.width = "0";
        menu.style.height = "0";
        
    } else {
        menu.classList.add("navMenu");
        close.style.display = "block";
        nav.style.display = "none";
        menu.style.width = "120rem";
        menu.style.height = "151rem";
    }
}


let answers = document.querySelectorAll(".questions-container");

answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
