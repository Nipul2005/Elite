const gallery = document.getElementById("gallery");
const gallerySection = document.getElementById("gallerySection");
const imageDetails = document.getElementById("imageDetails");
const nextSlide = document.getElementById("next");
const prevSlide = document.getElementById("prev");
const galleryImage = document.getElementById("galleryImage");
const galleryBtn = document.getElementById("galleryBtn");
const closeBtn = document.getElementById("closeBtn");
import { devUrl, prodUrl } from "./constant.js";

const url = window.location.hostname === "localhost" ? devUrl : prodUrl;
var images;
let currentIdx = 0;
let galleryId = 0;

galleryBtn.addEventListener("click", () => {
  galleryId = (galleryId + 1) % images.length;
  imageDetails.innerHTML = `<span class="space-y-3  ">
            <h2 class="text-2xl font-semibold text-primary border-b w-full pb-3 user-select-none">
              ${images[galleryId].eventName}
            </h2>
            <p class="text-pure user-select-none">
              ${images[galleryId].desc}
            </p>
          </span>`;
  galleryImage.src = images[galleryId].url[1][0].secure_url;
});

closeBtn.addEventListener("click", () => {
  gallerySection.classList.remove(
    "opacity-100",
    "h-[100vh]",
    "sm:py-18",
    "py-7",
    "px-4",
    "z-50"
  );
});

window.openViever = function (id) {
  gallerySection.classList.add(
    "opacity-100",
    "h-[100vh]",
    "sm:py-18",
    "py-7",
    "px-4",
    "z-50"
  );
  galleryId = id;
  imageDetails.innerHTML = `<span class="space-y-3  ">
            <h2 class="text-3xl font-semibold text-primary border-b w-full pb-3 user-select-none">
              ${images[galleryId].eventName}
            </h2>
            <p class="text-pure user-select-none">
              ${images[galleryId].desc}
            </p>
          </span>`;

  galleryImage.src = images[galleryId].url[1][0].secure_url;
};

async function fetchGallery() {
  const laoder = `<div class="flex justify-center items-center w-10 h-10 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>`;
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

function prev() {
  currentIdx =
    (currentIdx - 1 + images[galleryId].url[1].length) %
    images[galleryId].url[1].length;
  galleryImage.src = images[galleryId].url[1][currentIdx].secure_url;
}

nextSlide.addEventListener("click", next);
prevSlide.addEventListener("click", prev);

window.onload = fetchGallery;
 