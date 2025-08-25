const gallery = document.getElementById("gallery");
const gallerySection = document.getElementById("gallerySection");
const imageDetails = document.getElementById("imageDetails");
const nextSlide = document.getElementById("next");
const galleryImage = document.getElementById("galleryImage");
const galleryBtn = document.getElementById("galleryBtn");
const closeBtn = document.getElementById("closeBtn");
import { devUrl, prodUrl } from "./constant.js";

const url = window.location.hostname === "localhost" ? devUrl : prodUrl;
var images;
let currentIdx = 0;
let galleryId = 0;

function show(id) {
  images[id].url[1].length == 1
    ? (nextSlide.style.visibility = "hidden")
    : (nextSlide.style.visibility = "visible");
}

galleryBtn.addEventListener("click", () => {
  galleryId = (galleryId + 1) % images.length;
  imageDetails.innerHTML = `<span class="space-y-3  ">
            <h2 class="text-3xl font-semibold text-primary border-b w-full pb-3 user-select-none">
              ${images[galleryId].eventName}
            </h2>
            <p class="text-pure user-select-none">
              ${images[galleryId].desc}
            </p>
          </span>`;
  galleryImage.src = images[galleryId].url[1][0].secure_url;
  show(galleryId);
});

closeBtn.addEventListener("click", () => {
  gallerySection.classList.remove(
    "opacity-100",
    "min-h-[100vh]",
    "sm:py-18",
    "py-12",
    "px-4",
    "z-50",
    "shadow-2xl",
    "shadow-2xl",
    "border-b-4",
    "border-primary"
  );
});

window.openViever = function (id) {
  galleryId = id;
  show(galleryId);

  gallerySection.classList.add(
    "opacity-100",
    "min-h-[100vh]",
    "sm:py-18",
    "py-12",
    "px-4",
    "z-50",
    "shadow-2xl",
    "border-b-4",
    "border-primary"
  );

  imageDetails.innerHTML = `<span class="space-y-3  ">
            <h2 class="text-3xl font-semibold text-primary border-b w-full pb-3 user-select-none">
              ${images[galleryId].eventName}
            </h2>
            <p class="text-pure user-select-none">
              ${images[galleryId].desc}
            </p>
          </span>`;
  galleryImage.src = images[galleryId].url[1][0].secure_url;
  gallerySection.scrollIntoView({ behavior: "smooth" });
};

async function fetchGallery() {
  const laoder = `<div class="col-span-3 w-10 h-10 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent "></div>`;
  gallery.innerHTML = laoder;
  const result = await fetch(`${url}/gallery`);

  const { data } = await result.json();
  gallery.innerHTML = "";
  images = data;

  if (data.length === 0)
    return (gallery.innerHTML = `<h1 class="text-center text-4xl text-primary font-semibold">Gallery is empty</h1>`);
  data.map((item, id) => {
    gallery.innerHTML += `
        <div
            class="col-span-1 shrink-0 w-full h-[${item.url[0].height}px] md:h-[250px] relative overflow-hidden group shadow-xl rounded-lg hover:shadow-2xl cursor-pointer flex justify-center items-center"
            onClick="openViever(${id})"
          >
            <img
              src="${item.url[0].secure_url}"
              lazy="loading"
              alt="Elite Computer Institute ${id}"
              class=""
            />
            <span
              class="absolute left-0 bottom-0 z-10 px-5 py-3 flex flex-col gap-y-1 justify-end items-start text-black bg-white/80 backdrop-blur-md group-hover:-bottom-50 transition-all duration-500 ease-in w-full"
            >
              <h2 class="text-2xl font-semibold">${item.eventName}</h2>
              <p class="line-clamp-2">
                ${item.desc}
              </p>
            </span>
          </div>
    `;
  });
}

function next() {
  currentIdx = (currentIdx + 1) % images[galleryId].url[1].length;
  galleryImage.src = images[galleryId].url[1][currentIdx].secure_url;
}

nextSlide.addEventListener("click", next);

window.onload = fetchGallery;
