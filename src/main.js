import "./style.css";
const featureBoxes = document.getElementById("featureBox");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const showMore = document.getElementById("showMore");
const cards = document.querySelectorAll(".cards");

const scroll = (direction) => {
  const scrollAmount = featureBoxes.clientWidth;
  featureBoxes.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

leftArrow.addEventListener("click", () => scroll("left"));
rightArrow.addEventListener("click", () => scroll("right"));

showMore.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("hidden");
    card.classList.add("flex");
  });

  showMore.classList.add("hidden");
});
