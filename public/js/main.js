const featureBoxes = document.getElementById("featureBox");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const showMore = document.getElementById("showMore");
const cards = document.querySelectorAll(".cards");
const carousel = document.getElementById("carousel");

const hero = document.getElementById("hero");

let currentIndx = 0;
let cardsPerSlide;
let totalCards = 12;

showMore.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("hidden");
    card.classList.add("flex");
  });

  showMore.classList.add("hidden");
});

// cards js
function updateCrousel() {
  const translateX = -currentIndx * 100;
  featureBoxes.style.transform = `translateX(${translateX}%)`;
}
// will add window resize s if soomeone check the feature box in inspect and move mobile view to desktop so cards set itself automatically

function nextSlide() {
  cardsPerSlide =
    window.innerWidth < 640 ? (cardsPerSlide = 1) : (cardsPerSlide = 3);

  if (currentIndx < totalCards / cardsPerSlide - 1) {
    currentIndx = currentIndx + 1;
    updateCrousel();
  }
  if (currentIndx > 0) {
    leftArrow.classList.add("opacity-100");
  }

  if (currentIndx == totalCards / cardsPerSlide - 1) {
    rightArrow.classList.add("opacity-0");
  }
}

function prevSlide() {
  if (currentIndx > 0) {
    currentIndx = currentIndx - 1;
    updateCrousel();
  }
  if (currentIndx < totalCards / cardsPerSlide - 1) {
    rightArrow.classList.remove("opacity-0");
  }

  if (currentIndx == 1) {
    leftArrow.classList.remove("opacity-100");
  }
}

setInterval(() => {
  if (currentIndx != totalCards / cardsPerSlide - 1) {
    nextSlide();
  } else {
    currentIndx = 0;
    updateCrousel();
    rightArrow.classList.remove("opacity-0");
  }
}, 4000);

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

// cards js end

// hero carousel js
let totalImg = carousel?.children.length;
let idx = 0;

function heroCarousel() {
  carousel.style.transform = `translateX(-${idx * 100}%)`;
}

function heroNext() {
  idx = (idx + 1) % totalImg;
  heroCarousel();
}
function heroPrev() {
  idx = (idx - 1) % totalImg;
  heroCarousel();
}

// setInterval(() => {
//   heroNext();
// }, 3000);

// hero carousel end here js

// carousel swiping js
let startX = 0;
let isTouch = false;

carousel.addEventListener("mousedown", (e) => {
  isTouch = true;
  handleSwipe(e.clientX);
});

function handleSwipe(endX) {
  const mainWidth = document.body.clientWidth;
  const swipeTo = endX > mainWidth / 2 ? true : false;

  console.log(swipeTo);
  if (swipeTo) {
    heroNext();
  } else {
    heroPrev();
  }
}
