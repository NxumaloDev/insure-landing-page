let menuBtn = document.querySelector(".menu-toggle")
let navItems = document.querySelector(".nav-items")

menuBtn.addEventListener('click', ()=> {
    if (navItems.style.opacity === "0") {
        navItems.style.opacity = "1"
        document.querySelector(".menu-toggle").src = "./images/icon-close.svg"
    }
    else {
        navItems.style.opacity = "0"
        document.querySelector(".menu-toggle").src = "./images/icon-hamburger.svg"
    }
})