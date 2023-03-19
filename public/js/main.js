"use strict";
window.addEventListener("load", function () {
  const mobMenuButton = document.getElementById("mob_menu_btn");
  const mobMenu = document.getElementById("mob_menu");
  mobMenuButton.addEventListener("click", () => {
    mobMenu.classList.toggle("visible");
    mobMenuButton.classList.toggle("visible");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  if (window.scrollY > 0) {
    header.classList.add("header-fixed");
    main.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
    main.classList.remove("header-fixed");
  }
});
