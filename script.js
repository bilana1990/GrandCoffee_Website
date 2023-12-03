const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    updateSlider();
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  updateSlider();
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  updateSlider();
});
// განმეორებითი ფუნქციონალი გატანილია ერთ ფუნქციაში და გამოძახებული
// იმ ადგილებზე სადაც იყო საჭირო
function updateSlider() {
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

const interval = setInterval(function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  updateSlider();
}, 2000);








const slider1 = document.querySelector(".slider1");

const leftArrow1 = document.querySelector(".left1");
const rightArrow1 = document.querySelector(".right1");
const indicatorParents1 = document.querySelector(".controls1 ul");
var sectionIndex = 0;

document.querySelectorAll(".controls1 li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    document.querySelector(".controls1 .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider1.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
});

leftArrow1.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls1 .selected").classList.remove("selected");
  indicatorParents1.children[sectionIndex].classList.add("selected");
  slider1.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow1.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".controls1 .selected").classList.remove("selected");
  indicatorParents1.children[sectionIndex].classList.add("selected");
  slider1.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
leftArrow1.addEventListener("click", function () {
  clearInterval(interval);
});

rightArrow1.addEventListener("click", function () {
  clearInterval(interval);
});




const toTop=document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})







function BurgerMenu(){
  let nav=document.querySelector("nav")
  nav.classList.toggle("active")

  
}




