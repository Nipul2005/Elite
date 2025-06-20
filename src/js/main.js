import emailjs from "@emailjs/browser";
const featureBoxes = document.getElementById("featureBox");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const showMore = document.getElementById("showMore");
const cards = document.querySelectorAll(".cards");
const carousel = document.getElementById("carousel");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

let currentIndx = 0;
let cardsPerSlide;
let totalCards = 12;

let id = 0;

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

setInterval(() => {
  if(carousel.children[id].getAttribute("is") == 1 ){
    carousel.children[id].setAttribute("is", 0);
    carousel.children[id].classList.toggle("opacity-0");
  }else{
    carousel.children[id].setAttribute("is", 1);
    carousel.children[id].classList.toggle("opacity-0");
  }

  id < carousel.children.length - 1 ? id++ : (id = 0);
}, 2000);

// emailjs publiuc key

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "Y0U_5YYlGlnx00jDH",
  });
})();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.innerHTML = "Sending...";
  emailjs.sendForm("service_xnl3k4z", "template_srk5fvd", this).then(
    () => {
      alert("Message sent successfully!");
      btn.innerHTML = "Submit";
      this.reset();
    },
    (err) => {
      alert("Failed to send message.");
      btn.innerHTML = "Submit";
    }
  );
});
