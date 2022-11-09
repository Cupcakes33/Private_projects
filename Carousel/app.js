const carouselWraper = document.querySelector(".carousel-wraper");
const previousButton = document.querySelector(".control-previous");
const nextButton = document.querySelector(".control-next");
const carouselItem = document.querySelectorAll(".carousel-item");
const indicatorButton = document.querySelectorAll(".indicator-button");
let carouselCount = 0;
let carouselLast = carouselItem.length;

function nextImg() {
  if (carouselCount < carouselLast - 1) {
    carouselCount++;
    moveCarousel(carouselCount);
  }
}

function previousImg() {
  if (carouselCount !== 0) {
    carouselCount--;
    moveCarousel(carouselCount);
  }
}

indicatorButton.forEach((e, n) => {
  e.addEventListener("click", () => {
    moveCarousel(n);
    carouselCount = n;
  });
});

function moveCarousel(e) {
  carouselWraper.style.transform = `translateX(${-e}00%)`;
}
