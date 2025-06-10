import emailjs from "@emailjs/browser";
const featureBoxes = document.getElementById("featureBox");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const showMore = document.getElementById("showMore");
const cards = document.querySelectorAll(".cards");
const carousel = document.getElementById("carousel");
const form=document.getElementById("form");
const btn=document.getElementById("btn");

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

const arr = ["c1.jpeg", "c2.jpg", "c3.jpg", "c4.jpg"];

setInterval(() => {
  const random = Math.floor(Math.random() * arr.length);
  carousel.src = `/${arr[random]}`;
}, 4000);

// emailjs publiuc key

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "0JXto0xokULVJrV8_",
  });
})();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.innerHTML="Sending...";
  emailjs.sendForm("service_f4cy3qs", "template_004tjtl", this).then(
    () => {
      alert("Message sent successfully!");
      btn.innerHTML = "Submit";
    },
    (err) => {
      console.log(err);
      alert("Failed to send message.");
      btn.innerHTML = "Submit";
    }
  );
});