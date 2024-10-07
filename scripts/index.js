const burgerMenu = document.querySelector("#header__burger-menu");
const overlay = document.querySelector(".header-overlay");
const exitIcon = document.querySelector("#header-overlay__cross");

burgerMenu.addEventListener("click", () => {
    overlay.classList.remove("hide");
    overlay.classList.add("active");
})

exitIcon.addEventListener("click", () => {
    overlay.classList.remove("active");
    overlay.classList.add("hide");
})