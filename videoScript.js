"use strict";
const mq = window.matchMedia("(max-width: 666px)");
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const xButton = document.querySelector(".XButton");
const menuListItem = document.querySelectorAll(".liItem");
if (mq.matches) {
    burger.addEventListener('click', function () {
        menuList.classList.toggle("dontDisplay");
        menuList.classList.add("menuSlide");
        burger.classList.add("dontDisplay");
        menuList.addEventListener("animationend", function () {
            for (var i = 0; i < menuListItem.length; ++i) {
                menuListItem[i].classList.remove('dontDisplay');
            }
        })
    })
    xButton.addEventListener('click', function () {
        menuList.classList.remove("menuSlide");
        menuList.classList.toggle("dontDisplay");
        burger.classList.remove("dontDisplay");
        for (var i = 0; i < menuListItem.length; ++i) {
                menuListItem[i].classList.add('dontDisplay');
            }
    })
};
