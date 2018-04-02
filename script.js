const video = document.getElementById("contest-video");
const iconsInstructions = document.querySelectorAll("#instructions path, #instructions rect, #instructions circle, #instructions line");
const iconsFooter = document.querySelectorAll("#footer path, #footer rect, #footer circle, #footer line");


/*Event listener for the video in the index page*/


video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.load();
});


window.onscroll = function () {
    drawsTaskIcons();
    drawsFooterIcons();
};

function drawsTaskIcons() {

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        iconsInstructions.forEach(e => {
            e.classList.add("drawing");

        })
    } else {
        iconsInstructions.forEach(e => {
            e.classList.remove("drawing");
        })
    }
}

function drawsFooterIcons() {

    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        iconsFooter.forEach(e => {
            e.classList.add("drawing");

        })
    } else {
        iconsFooter.forEach(e => {
            e.classList.remove("drawing");
        })
    }
}

var d = document.getElementById("first-svg");
var topPos = d.offsetTop;
