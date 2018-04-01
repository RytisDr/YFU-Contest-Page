"use strict";
const mq = window.matchMedia("(max-width: 666px)");
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const xButton = document.querySelector(".XButton");
const menuListItem = document.querySelectorAll(".liItem");
if (mq.matches) {
    burger.addEventListener('click', function () {
        for (var i = 0; i < menuListItem.length; ++i) {
                menuListItem[i].classList.remove("dontDisplay");
            }
        menuList.classList.remove("dontDisplay");
        menuList.classList.add("menuSlide");
        burger.classList.add("dontDisplay");
        xButton.classList.remove("dontDisplay");
        menuList.addEventListener("animationend", function openMenu () {
             menuList.removeEventListener("animationend", openMenu);
        })
    })
    xButton.addEventListener('click', function () {
       for (var i = 0; i < menuListItem.length; ++i) {
                menuListItem[i].classList.add("dontDisplay");
            }
        xButton.classList.add("dontDisplay");
        menuList.classList.replace("menuSlide", "menuSlideClose");
        burger.classList.remove("dontDisplay");
        menuList.addEventListener("animationend", function closeMenu () {
            menuList.classList.remove("menuSlideClose");
            burger.classList.remove("dontDisplay");
            menuList.removeEventListener("animationend", closeMenu);
        })
    })
};
