const video = document.getElementById("contest-video");

/*Event listener for the video in the index page*/


video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.load();
});

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
    console.log(_x, _y);
}
var x = getOffset(document.getElementById('first-svg')).top;

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 740 || document.documentElement.scrollTop > 740) {
        document.querySelectorAll("path, rect, circle, line").forEach(e => {
            e.classList.add("drawing");

        })
        if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
            document.querySelectorAll("path, rect, circle, line").forEach(e => {
                e.classList.add("drawing");

            })

        } else {
            document.querySelectorAll("path, rect, circle, line").forEach(e => {
                e.classList.remove("drawing");
            })
        }
    }
}
