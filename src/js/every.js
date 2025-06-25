const sidebar = document.getElementById("sidebar");
const open = document.getElementById("open");
const close = document.getElementById("close");
const floater = document.getElementById("floater");
const exCourses = document.getElementById("ex-courses");
const exParent = document.getElementById("ex-parent");
let flag = true;

function openSidebar() {
  sidebar.classList.remove("-top-50");
  sidebar.classList.add("top-0");
}

function closeSidebar() {
  sidebar.classList.add("-top-50");
  sidebar.classList.remove("top-0");
}

open.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);

floater.addEventListener("click", (e) => {
  if (flag) {
    floater.classList.add("right-0");
    floater.classList.remove("-right-25");
    flag = false;
  } else {
    floater.classList.add("-right-25");
    floater.classList.remove("right-0");
    flag = true;
  }
});

exParent.addEventListener("click", () => {
  console.log("clicked");
  exCourses.classList.add("py-3", "h-auto", "shadow-xl", "opacity-100");
  exCourses.classList.remove("h-0", "opacity-0");
});
exParent.addEventListener("mouseover", () => {
  console.log("hovered");
  exCourses.classList.add("py-3", "h-auto", "shadow-xl");
  exCourses.classList.remove("h-0", "opacity-0");
});
exParent.addEventListener("mouseleave", () => {
  console.log("mouseleave");
  exCourses.classList.remove("h-auto", "shadow-xl", "opacity-100", "py-3");
  exCourses.classList.add("opacity-0", "h-0");
});
 