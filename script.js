"use strict";


/*Event listener for the video in the index page*/
if (window.location.pathname.includes("index.html")) {
    const video = document.getElementById("contest-video");

    video.addEventListener('ended', function () {
        video.currentTime = 0;
        video.load();
    });
}


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

    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        iconsInstructions.forEach(e => {
            e.classList.add("drawing");
            console.log("instr mobile");
        })
    } else {
        iconsInstructions.forEach(e => {
            e.classList.remove("drawing");
            console.log("gone");
        })
    }
}

function drawsFooterIcons() {

    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        iconsFooter.forEach(e => {
            e.classList.add("drawing");
            console.log("footer mobile");
        })
    } else {
        iconsFooter.forEach(e => {
            e.classList.remove("drawing");
        })
    }
}

function desctopTaskIcons() {

    if (document.body.scrollTop > 444 || document.documentElement.scrollTop > 244) {
        iconsInstructions.forEach(e => {
            e.classList.add("drawing");
            console.log("instr desctop");
        })
    } else {
        iconsInstructions.forEach(e => {
            e.classList.remove("drawing");
            console.log("gone");
        })
    }
}

function desctopFooterIcons() {

    if (document.body.scrollTop > 2170 || document.documentElement.scrollTop > 2170) {
        iconsFooter.forEach(e => {
            e.classList.add("drawing");
            console.log("footer desctop");

        })
    } else if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
        iconsFooter.forEach(e => {
            e.classList.remove("drawing");
            console.log("disappear");
        })
    }
}


/*////////////////////////////MOBILE BURGER MENU ////////////////////*/
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const xButton = document.querySelector(".XButton");
const menuListItem = document.querySelectorAll(".liItem");
burger.addEventListener('click', function () {
    for (var i = 0; i < menuListItem.length; ++i) {
        menuListItem[i].classList.remove("dontDisplay");
        menuListItem[i].addEventListener('click', goToPage);
    }
    menuList.classList.remove("dontDisplay");
    menuList.classList.add("menuSlide");
    burger.classList.add("dontDisplay");
    xButton.classList.remove("dontDisplay");
    menuList.addEventListener("animationend", function openMenu() {
        menuList.removeEventListener("animationend", openMenu);
    })
})

function goToPage(e) {
    if (e.currentTarget==menuListItem[0]) {
        window.location = "index.html";
    }
    if (e.currentTarget==menuListItem[1]) {
        window.location = "apply.html";
    }
    if (e.currentTarget==menuListItem[2]) {
        window.location = "video.html";
    }
    if (e.currentTarget==menuListItem[3]) {
        window.location = "https://www.yfu.dk/";
    }
}
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
////////////////Map and Pins///////////////////////



const imageKarlis = document.getElementById("image-karlis");
const imageSanta = document.getElementById("image-santa");
const imagePhilip = document.getElementById("image-philip");
const imageSara = document.getElementById("image-sara");
const textParaguay = document.getElementById("text-paraguay");
const textUsa = document.getElementById("text-usa");
const textChile = document.getElementById("text-chile");
const textChina = document.getElementById("text-china");

const allPins = document.querySelectorAll(".pin");
allPins.forEach(function (pin) {
    pin.addEventListener('click', function () {
        if (pin == allPins[0]) {

            imageKarlis.classList.remove("dontDisplay");
            textParaguay.classList.remove("dontDisplay");
            imageSara.classList.add("dontDisplay");
            textUsa.classList.add("dontDisplay");
            imagePhilip.classList.add("dontDisplay");
            textChina.classList.add("dontDisplay");
            imageSanta.classList.add("dontDisplay");
            textChile.classList.add("dontDisplay");
        }

        if (pin == allPins[1]) {
            imageSara.classList.remove("dontDisplay");
            textUsa.classList.remove("dontDisplay");
            imageKarlis.classList.add("dontDisplay");
            textParaguay.classList.add("dontDisplay");
            imagePhilip.classList.add("dontDisplay");
            textChina.classList.add("dontDisplay");
            imageSanta.classList.add("dontDisplay");
            textChile.classList.add("dontDisplay");
        }

        if (pin == allPins[3]) {
            imagePhilip.classList.remove("dontDisplay");
            textChina.classList.remove("dontDisplay");
            imageKarlis.classList.add("dontDisplay");
            textParaguay.classList.add("dontDisplay");
            imageSara.classList.add("dontDisplay");
            textUsa.classList.add("dontDisplay");
            imageSanta.classList.add("dontDisplay");
            textChile.classList.add("dontDisplay");
        }

        if (pin == allPins[2]) {
            imageSanta.classList.remove("dontDisplay");
            textChile.classList.remove("dontDisplay");
            imageKarlis.classList.add("dontDisplay");
            textParaguay.classList.add("dontDisplay");
            imagePhilip.classList.add("dontDisplay");
            textChina.classList.add("dontDisplay");
            imageSara.classList.add("dontDisplay");
            textUsa.classList.add("dontDisplay");
        }

    });
})

/////////////////////////////// LIKE VIDEO FUNCTIONS////////////////////////////////////////
let likeNumber = 0;
let clicks = {};
let likeNrSpace = document.querySelectorAll(".videos div p span");
const likeButtons = document.querySelectorAll(".likeButton").forEach(function (elem) {
    elem.dataset.likes=0
    elem.addEventListener('click', liked);
});

function liked(e) {
    e.currentTarget.querySelector(".heart").classList.add("likeClick");
    e.currentTarget.querySelector(".heart").append(e.currentTarget.id);
    e.currentTarget.querySelector(".heart").addEventListener('animationend', function (e) {
        e.currentTarget.classList.remove("likeClick");
    })

    let likes = e.target.dataset.likes;
    likes++
    e.target.dataset.likes=likes
    let nr = e.currentTarget.id - 1;
    likeNrSpace[nr].innerHTML = likes + " ";
/*
    likeNumber++;
    let nr = e.currentTarget.id - 1;
    likeNrSpace[nr].innerHTML = likeNumber + " ";
    if (likeNumber > 0) {
        likeNumber = 0;
    }*/
};
