"use strict"

const menuItems = document.querySelectorAll(".catalog-filters__menu-item");

menuItems.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.classList.toggle("catalog-filters__menu-item-active");
    event.target.nextElementSibling.classList.toggle("visually-hidden");
  });
});