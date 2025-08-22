const gallery = document.getElementById("gallery");
const gallerySection = document.getElementById("gallerySection");
const imageDetails = document.getElementById("imageDetails");
const nextSlide = document.getElementById("next");
const prevSlide = document.getElementById("prev");
const galleryImage = document.getElementById("galleryImage");
import { devUrl, prodUrl } from "./constant.js";

const url = window.location.hostname === "localhost" ? devUrl : prodUrl;
var images;
let currentIdx = 0;
let galleryId = 0;

window.openViever = function (id) {
  gallerySection.classList.add(
    "opacity-100",
    "h-auto",
    "sm:py-18",
    "py-7",
    "px-4"
  );
  imageDetails.innerHTML = `<span class="space-y-3">
            <h2 class="text-2xl font-semibold text-primary border-b w-full pb-3">
              ${images[id].eventName}
            </h2>
            <p class="text-pure">
              ${images[id].desc}
            </p>
          </span>`;

  galleryImage.src = images[id].url[1][0].secure_url;
  galleryId = id;
};

async function fetchGallery() {
  const result = await fetch(`${url}/gallery`);

  const { data } = await result.json();
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
              class="absolute left-0 bottom-0 z-10 px-4 py-3 flex flex-col gap-y-1 justify-end items-start text-white bg-black/95 group-hover:-bottom-50 transition-all duration-500 ease-in w-full"
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
