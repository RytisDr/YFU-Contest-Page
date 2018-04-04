"use strict";
/*////////////////////////////MOBILE BURGER MENU ////////////////////*/
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const xButton = document.querySelector(".XButton");
const menuListItem = document.querySelectorAll(".liItem");
burger.addEventListener('click', function () {
    for (var i = 0; i < menuListItem.length; ++i) {
        menuListItem[i].classList.remove("dontDisplay");
    }
    menuList.classList.remove("dontDisplay");
    menuList.classList.add("menuSlide");
    burger.classList.add("dontDisplay");
    xButton.classList.remove("dontDisplay");
    menuList.addEventListener("animationend", function openMenu() {
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
    menuList.addEventListener("animationend", function closeMenu() {
        menuList.classList.remove("menuSlideClose");
        burger.classList.remove("dontDisplay");
        menuList.removeEventListener("animationend", closeMenu);
    })
})
/////////////////////////////////////////////////////////////
/////////////////////////////// LIKE VIDEO FUNCTIONS////////////////////////////////////////
let likeNumber = 0;
let likeNrSpace = document.querySelectorAll(".videos div p span");
const likeButtons = document.querySelectorAll(".likeButton").forEach(function (elem) {
    elem.addEventListener('click', liked);
});

function liked(e) {

    countLikes(e);
    e.currentTarget.querySelector(".heart").classList.add("likeClick");
    e.currentTarget.querySelector(".heart").addEventListener('animationend', function (e) {
        e.currentTarget.classList.remove("likeClick");
    });
    function countLikes(e){
        likeNumber++;
        likeNrSpace[0].innerHTML = likeNumber;
    }
}
