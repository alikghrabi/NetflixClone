// Navigation Bar
let btn = document.getElementById("btn");
// create icon element, give it a class for the bar icon and some styling
let bars = document.createElement("i");
bars.setAttribute("class", "fa-solid fa-bars");
bars.style.cssText = "position: absolute; top: 12px; right: 20px; font-size: 30px; color: lightgray; cursor: pointer; margin-top: 5px";
// add the icon to the body
document.body.appendChild(bars);
bars.addEventListener("click", function () {
    // when clicking the bar icon, make the nav bar appear on the page by translating it 100vw - it's width
    document.querySelector("nav ul").style.cssText = "transform: translate(calc(100vw - 250px)); transition: all 0.5s";
    // make it so that the user can't scroll down when the nav is open(better looking style), until he closes it
    document.body.style.cssText = "overflow-y: hidden;";
    // remove bar icon as it's no longer needed when nav bar is open
    bars.remove();
});

btn.addEventListener("click", function() {
    // on clicking the X button, the nav bar closes by translating back to the outside of the page(won't appear since we have overflow-x hidden)
    document.querySelector("nav ul").style.cssText = "trasform: translate(100vw); transition: all 0.5s";
    // after the nav bar is closed(after 500ms), the bar icon should appear again since it is needed once again
    setTimeout(function () {
        document.body.append(bars);
    }, 500);
    // the user can now scroll since he closed the nav bar 
    document.body.style.cssText = "overflow-y: auto;";
});

// Arrow
// for the arrow of the series section
let arrow = document.querySelectorAll(".arrow")[0];
let box = document.querySelector(".news-wrapper");
arrow.addEventListener("click", function () {
    // when clicking the arrow, scroll in a smooth behavior to the left
        box.style.cssText = "scroll-behavior: smooth;";
        box.scrollLeft += 1000;
});

// for the arrow of the movies section
let arrow2 = document.querySelectorAll(".arrow")[1];
let box2 = document.querySelectorAll(".news-wrapper")[1];

arrow2.addEventListener("click" , function () {
    // when clicking the arrow, scroll in a smooth behavior to the left
    box2.style.cssText = "scroll-behavior: smooth;";
    box2.scrollLeft += 1000;
});

box.addEventListener("scroll", function () {
    //when scrolling without using the arrow, the arrow is no longer needed so make it hidden till we come back to the start, then we make it appear again
    arrow.style.cssText = "display:none;";
    if(box.scrollLeft == 0) {
        arrow.style.cssText = "display: block;";
    }
});

box2.addEventListener("scroll", function () {
    //when scrolling without using the arrow, the arrow is no longer needed so make it hidden till we come back to the start, then we make it appear again
    arrow2.style.cssText = "display:none;";
    if(box2.scrollLeft == 0) {
        arrow2.style.cssText = "display: block;";
    }
});

// Images SlideShow
let slide = document.querySelector(".slide-show");
let items = document.querySelectorAll(".items");
let counter = 0;
let variable = -100;
function slideShow () {
    // translate to the next div
    slide.style.cssText = `transform: translate(${variable}vw); transition: all 1s;`;
    // increment counter on each transition
    counter++;
    // variable is used for the value of the transalte to go to next image
    variable -= 100;
    // when we pass all images, go back to the start of slide show
    if(counter >= items.length) {
        // first and last div are identical, so move to first div without transititon(looks as if we stayed on the same image)
        slide.style.cssText = "transform: translate(0px);";
        // transform quickly to the second div
        setTimeout(() => {slide.style.cssText = "transform: translate(-100vw); transition: all 1s;";},5);
        // it was done this way so that when traslating back to first div, it goes to the 2nd div quickly without having to back track and pass through all previous divs.            
        counter = 1;
        variable = -200;
    }
}
//call function slideShow every 5 seconds
setInterval(slideShow, 5000);

// Search Bar
let input = document.querySelector("[type='text']");
let listItems = document.getElementsByClassName("list-item");
input.addEventListener("keyup", function () {
    for(let i = 0; i < listItems.length; i++) {
        //if user inputs nothing, or when he erases the input he previously had
        if(input.value === ""){
            listItems[i].style.display = "none";
            continue;
        }
        //take the 2nd child of the listItem which is the h3 that has the title of movie/serie and make it lower case
        let text = listItems[i].children[1].innerHTML.toLowerCase();
        // make input val lower case for case sensitivity
        input.value = input.value.toLowerCase();
        // if input val matches the start of any show/movie, showcase that movie/show, else just keep it hidden
        if(text.startsWith(input.value)) {
            listItems[i].style.display = "flex";
        }else {
            listItems[i].style.display = "none";
        }
    }
});

//when selecting movie/serie, go to it's page
let movies = ["Avatar", "Inception", "Interstellar", "JohnWick", "PulpFiction", "TheGodfather", "TheHangover"];
let shows = ["TheFlash", "BreakingBad", "MoneyHeist", "Lucifer", "Rick&Morty", "PrisonBreak", "GameOfThrones"];

let images = document.querySelectorAll(".news-item-img");
let showAndMovies = document.querySelectorAll(".news-item-title");
for (let i = 0; i < showAndMovies.length; i++) {
    // to remove spaces from folder and file names
    let page = showAndMovies[i].innerHTML.split(" ").join("");
    images[i].addEventListener("click", () => {
        // for styling
        images[i].style.cursor = "wait";
        // if the title selected is a movie, go to that selected movie's page, else it's a series and should go to it's page
        if(movies.includes(page)) {
            setTimeout(() => {window.location = `../movies_HasanJaffal/Project/${page}.html`;}, 500);
        }else {
            // for the special case of Rick & Morty
            if(page.includes("Rick")) {
                setTimeout(() => {window.location = `../Web_Project_Ali_Ghrabi/Web_Project/Page/Rick_&_Morty/Rick&Morty.html`;}, 500);
            }else {
                setTimeout(() => {window.location = `../Web_Project_Ali_Ghrabi/Web_Project/Page/${page}/${page}.html`;}, 500);
            }
        }
    });
}

let info = document.querySelectorAll("#info");
for(let i = 0; i < info.length; i++) {
    info[i].addEventListener("click",  () => {window.location = "../exclusive news_IsraaAlZein/index.html#info";});
}

// search bar to movies/series page

let list = document.querySelectorAll(".list-item");
for(let i = 0; i < list.length; i++) {
    // to remove spaces from the h3 which is the 2nd child
    let page = list[i].children[1].innerHTML.split(" ").join("");
    list[i].addEventListener("click", () => {
        // if its a movie, go to it in the movie page, else go to it in the series page
        if(movies.includes(page)) {
            setTimeout(() => {window.location = `../movies_HasanJaffal/Project/${page}.html`;}, 500);
        }else {
            // for the special case of Rick & Morty
            if(page.includes("Rick")) {
                setTimeout(() => {window.location = `../Web_Project_Ali_Ghrabi/Web_Project/Page/Rick_&_Morty/Rick&Morty.html`;}, 500);
            }else {
                setTimeout(() => {window.location = `../Web_Project_Ali_Ghrabi/Web_Project/Page/${page}/${page}.html`;}, 500);
            }
        }
    });
}