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
