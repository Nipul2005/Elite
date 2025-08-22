const form = document.getElementById("form");
const btn = document.getElementById("btn");
const changer = document.getElementById("change");
import { devUrl, prodUrl } from "./constant.js";

const url = window.location.hostname === "localhost" ? devUrl : prodUrl;

let html = ` <form
          class="space-y-10 w-full"
          id="gallery_form"
          enctype="multipart/form-data"
        >
          <!-- Event Name -->
          <div class="relative">
            <input
              type="text"
              placeholder="Event Name"
              name="name"
              required
              class="peer w-full px-2 py-3 border-b-2 border-primary/80 text-gray-800 focus:outline-none focus:border-primary"
            />
          </div>
          <div class="relative">
            <input
              type="text"
              placeholder="Enter Event Description"
              name="desc"
              class="peer w-full px-2 py-3 border-b-2 border-primary/80 text-gray-800 focus:outline-none focus:border-primary"
            />
          </div>

          <!-- File Upload (Dropzone Style) -->
          <div>
            <label
              class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:border-primary hover:bg-primary/5 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16V4m0 0l-4 4m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
              <span class="text-sm text-gray-500"
                >Click to upload or drag & drop</span
              >
              <input type="file" accept="image/jpeg, image/png, image/jpg, image/webp" multiple class="hidden" name="files" id="files" required/>
            </label>
            
          </div>

          <!-- Submit Button -->
          <span class="flex justify-center items-center group">
            <button
              class="flex justify-center items-center gap-2 cursor-pointer text-primary text-lg font-semibold"
              type="submit"
              id="gallery_btn"
            >
              Submit
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="group-hover:translate-x-2 transition-all ease-in duration-300"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                ></path>
              </svg>
            </button>
          </span>
        </form>`;

const div = document.createElement("div");
div.innerHTML = html;
const galleryForm = div.querySelector("#gallery_form");
const gallery_btn = div.querySelector("#gallery_btn");

form.addEventListener("submit", async (e) => {
  btn.disabled = true;
  btn.innerHTML = "Submitting...";
  e.preventDefault();
  const formdata = new FormData(e.target);
  const object = Object.fromEntries(formdata.entries());

  const response = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  const data = await response.json();
  if (data.status !== 200) {
    btn.disabled = false;
    btn.innerHTML = "Submit";
    alert("Something went wrong");
    return form.reset();
  }

  changer.innerHTML = "";
  changer.append(div);
  btn.disabled = false;
  btn.innerHTML = "Submit";
});

galleryForm.addEventListener("submit", async (e) => {
  gallery_btn.disabled = true;
  gallery_btn.innerHTML = "Submitting...";
  e.preventDefault();
  const formdata = new FormData(e.target);
  const response = await fetch(`${url}/upload`, {
    method: "POST",
    body: formdata,
  });
  const data = await response.json();
  if (data.status !== 200) {
    gallery_btn.disabled = false;
    gallery_btn.innerHTML = "Submit";
    alert("Something went wrong");
    return form.reset();
  }

  window.location.href = "/gallery";
  gallery_btn.disabled = false;
  gallery_btn.innerHTML = "Submit";
});
