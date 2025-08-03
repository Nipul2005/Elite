const featureBoxes = document.getElementById("featureBox");
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

function updateSlide(){
  featureBoxes.style.transform = `translateX(-${currentIndx * 100}%)`;
}


setInterval(() => {
  currentIndx = (currentIndx + 1) % featureBoxes.children.length;
  updateSlide();
}, 5000);


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

setInterval(() => {
  heroNext();
}, 5000);
// hero carousel end here js

// carousel swiping js
carousel.addEventListener("mousedown", (e) => {
  handleSwipe(e.clientX);
});

carousel.addEventListener(
  "touchstart",
  (e) => {
    handleSwipe(e.touches[0].clientX);
  },
  { passive: true }
);

function handleSwipe(endX) {
  const mainWidth = document.body.clientWidth;
  const swipeTo = endX > mainWidth / 2 ? true : false;
  if (swipeTo) {
    heroNext();
  } else {
    heroPrev();
  }
}
