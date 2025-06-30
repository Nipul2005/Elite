const sidebar = document.getElementById("sidebar");
const open = document.getElementById("open");
const close = document.getElementById("close");
const floater = document.getElementById("floater");
const exCourses = document.getElementById("ex-courses");
const exParent = document.getElementById("ex-parent");
const diploma = document.getElementById("dip");
const certi = document.getElementById("certi");
const dipCourses = document.getElementById("dip-courses");
const certiCourses = document.getElementById("certi-courses");
const MobileExParent = document.getElementById("mobile-ex-parent");
const MobileExCourses = document.getElementById("mobile-ex-courses");
let flag = true;
let mobileFlag = true;

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
  exCourses.classList.add(
    "py-3",
    "h-auto",
    "shadow-xl",
    "opacity-100",
    "border",
    "border-primary/40"
  );
  exCourses.classList.remove("h-0", "opacity-0");
});
exParent.addEventListener("mouseover", () => {
  exCourses.classList.add(
    "py-3",
    "h-auto",
    "shadow-xl",
    "border",
    "border-primary/40"
  );
  exCourses.classList.remove("h-0", "opacity-0");
});
exParent.addEventListener("mouseleave", () => {
  exCourses.classList.remove(
    "h-auto",
    "shadow-xl",
    "opacity-100",
    "py-3",
    "border",
    "border-primary/40"
  );
  exCourses.classList.add("opacity-0", "h-0");
});

// mobile view navigation bar
MobileExParent.addEventListener("click", () => {
  if (mobileFlag) {
    MobileExCourses.classList.add("py-2", "h-auto", "opacity-100");
    MobileExCourses.classList.remove("h-0", "opacity-0");
    mobileFlag = false;
  } else {
    MobileExCourses.classList.remove("h-auto", "opacity-100", "py-2");
    MobileExCourses.classList.add("opacity-0", "h-0");
    mobileFlag = true;
  }
});

MobileExParent.addEventListener("mouseleave", () => {
  MobileExCourses.classList.remove("h-auto", "opacity-100", "py-2");
  MobileExCourses.classList.add("opacity-0", "h-0");
  mobileFlag = true;
});
