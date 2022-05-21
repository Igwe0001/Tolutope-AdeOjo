const body = document.querySelector("body");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const close = document.querySelector(".close");
const bun = document.querySelectorAll(".bun");
const bunCrust = document.querySelectorAll(".bun-crust");
const link = document.querySelectorAll(".link");
const header = document.querySelector("header");
const main = document.querySelector("main");
// const imgtargets = document.querySelectorAll(".image");
const gallary = document.querySelectorAll(".image");
let latestOpenImg;
let windowWidth = window.innerWidth;

const headerHeight = header.getBoundingClientRect().height;
// console.log(main);

//Navigation Control
hamburger.addEventListener("click", () => {
  nav.classList.toggle("switch");
  bun.forEach((e) => {
    e.classList.toggle("toggle");
  });
  bunCrust.forEach((e) => {
    e.classList.toggle("toggle");
  });
  link.forEach((e) => {
    e.classList.toggle("toggle");
  });
});

//Sticky Header With Intersection Observer

/*
const obsCallBack = function (entries) {
    const [entry] = entries;
    console.log(entries)
    // header.classList.add('sticky');

    // if (entry.isIntersecting === false) header.classList.add('sticky')
    // else header.classList.remove('sticky')
    if (entry.isIntersecting === false) {
        console.log('add sticky')
        header.classList.add('sticky')
        console.log(header.scrollHeight);
    } else {
        console.log('rem0ve sticky ');
        header.classList.remove('sticky')
        console.log(header.scrollHeight);

    }
}



const obsOption = {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`
}

const observer = new IntersectionObserver(obsCallBack, obsOption)
observer.observe(header)

*/

//Header Sticky Scroll height
window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

//Lazy Loading Images

//Image viwer

if (gallary) {
  gallary.forEach(function (image, index) {
    image.addEventListener("click", () => {
      let getElementCss = window.getComputedStyle(image);
      let getFullImageurl = getElementCss.getPropertyValue("background-image");
      let getimgUrlPos = getFullImageurl.split("/ade/thumbs/");
      let setNewImage = getimgUrlPos[1].replace('")', "");

      latestOpenImg = index + 1;

      let container = document.body;
      let newImageWindow = document.createElement("div");
      container.appendChild(newImageWindow);
      newImageWindow.setAttribute("class", "img-window");
      newImageWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImageWindow.appendChild(newImg);
      newImg.setAttribute("src", "ade/" + setNewImage);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector('.img-window')
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg)

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = latestOpenImg + 1;
        if (calcNewImg > gallary.length) {
            calcNewImg = 1;
        }
    }

    else if (changeDir === 0) {
        calcNewImg = latestOpenImg - 1;
        if (changeDir < 1) {
            calcNewImg = gallary.length;
        }
    }

    newImg.setAttribute("src", "ade/img" + calcNewImg + ".jpg")
    newImg.setAttribute("id", "current-img");
    latestOpenImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
    }
}


// Page loader

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#spinner").style.visibility = "visible";
  } else {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};