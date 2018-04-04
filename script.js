"use strict";


/*Event listener for the video in the index page*/
const video = document.getElementById("contest-video");

video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.load();
});



/*Function to start drawing icons at the certain scroll point*/

const iconsInstructions = document.querySelectorAll("#instructions path, #instructions rect, #instructions circle, #instructions line");
const iconsFooter = document.querySelectorAll("#footer path, #footer rect, #footer circle, #footer line");
const mobileFunction = window.matchMedia("(max-width: 666px)")

window.onscroll = function () {
    if (mobileFunction.matches) {

        drawsTaskIcons();
        drawsFooterIcons();
    } else {
        desctopTaskIcons();
        desctopFooterIcons();
    }
}

function drawsTaskIcons() {

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        iconsInstructions.forEach(e => {
            e.classList.add("drawing");
            console.log("instr mobile");
        })
    }
    /*else {
    iconsInstructions.forEach(e => {
        e.classList.remove("drawing");
    })
}*/
}

function drawsFooterIcons() {

    if (document.body.scrollTop > 870 || document.documentElement.scrollTop > 870) {
        iconsFooter.forEach(e => {
            e.classList.add("drawing");
            console.log("footer mobile");
        })
    }
    /*else {
    iconsFooter.forEach(e => {
        e.classList.remove("drawing");
    })
}*/
}

function desctopTaskIcons() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        iconsInstructions.forEach(e => {
            e.classList.add("drawing");
            console.log("instr desctop");
        })
    }
    /*else {
    iconsInstructions.forEach(e => {
        e.classList.remove("drawing");
    })
}*/
}

function desctopFooterIcons() {

    if (document.body.scrollTop > 2280 || document.documentElement.scrollTop > 2280) {
        iconsFooter.forEach(e => {
            e.classList.add("drawing");
            console.log("footer desctop");

        })
    }
    /*else {
    iconsFooter.forEach(e => {
        e.classList.remove("drawing");
    })
}*/
}


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
