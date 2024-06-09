let btn = document.getElementById("btn");
let bars = document.createElement("i");
bars.setAttribute("class", "fa-solid fa-bars");
bars.style.cssText = "position: absolute; top: 12px; right: 20px; font-size: 30px; color: lightgray; cursor: pointer; margin-top: 5px";
document.body.appendChild(bars);
bars.addEventListener("click", function () {
    document.querySelector("nav ul").style.cssText = "transform: translate(calc(100vw - 250px)); transition: all 0.5s;";
    document.body.style.cssText = "overflow-y:hidden;";
    bars.remove();
});
btn.addEventListener("click", function() {
    document.querySelector("nav ul").style.cssText = "trasform: translate(100vw); transition: all 0.5s";
    setTimeout(function () {
        document.body.append(bars);
    }, 500);
    document.body.style.cssText = "overflow-y: auto;";
});

let arrow = document.querySelectorAll(".arrow")[0];
let box = document.querySelector(".news-wrapper");
arrow.addEventListener("click", function () {
        box.style.cssText = "scroll-behavior: smooth;";
        box.scrollLeft += 1000;
});

let arrow2 = document.querySelectorAll(".arrow")[1];
let box2 = document.querySelectorAll(".news-wrapper")[1];

arrow2.addEventListener("click" , function () {
    box2.style.cssText = "scroll-behavior: smooth;";
    box2.scrollLeft += 1000;
});

box.addEventListener("scroll", function () {
    arrow.style.cssText = "display:none;";
    if(box.scrollLeft == 0) {
        arrow.style.cssText = "display: block;";
    }
});


box2.addEventListener("scroll", function () {
    arrow2.style.cssText = "display:none;";
    if(box2.scrollLeft == 0) {
        arrow2.style.cssText = "display: block;";
    }
});