var imgs = Array.from(document.querySelectorAll("img"));
var lightBox = document.querySelector("#lightBox");
var lightBoxImg = document.querySelector("#lightBoxImg");
var x = document.querySelector("#x");
var pre = document.querySelector("#pre");
var nxt = document.querySelector("#nxt");
var global;
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    lightBox.classList.replace("d-none", "d-flex");
    var src = e.target.getAttribute("src");
    global = imgs.indexOf(e.target);
    lightBoxImg.style.background = `url(${src})`;
  });
}
x.addEventListener("click", function () {
  closeSlider();
});
// close function
function closeSlider() {
  lightBox.classList.replace("d-flex", "d-none");
}
// next function
nxt.addEventListener("click", function () {
  global++;
  lightBoxImg.style.background = `url(${imgs[global].getAttribute("src")})`;
  if (global === imgs.length - 1) {
    global = 0;
  }
});
// pre function
pre.addEventListener("click", function () {
  global--;
  lightBoxImg.style.background = `url(${imgs[global].getAttribute("src")})`;
  if (global === 0) {
    global = imgs.length - 1;
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id === "lightBox") {
    closeSlider();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    global++;
    lightBoxImg.style.background = `url(${imgs[global].getAttribute("src")})`;
    if (global === imgs.length - 1) {
      global = 0;
    }
  }
  if (e.code == "ArrowLeft") {
    global--;
    lightBoxImg.style.background = `url(${imgs[global].getAttribute("src")})`;
    if (global === 0) {
      global = imgs.length - 1;
    }
  }
  if (e.code == "Escape") {
    closeSlider();
  }
});
// console.log(index);
