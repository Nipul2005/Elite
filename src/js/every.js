const sidebar = document.getElementById("sidebar");
const open = document.getElementById("open");
const close = document.getElementById("close");
const floater = document.getElementById("floater");
let flag = true;

function openSidebar() {
  sidebar.classList.remove("top-1000");
  sidebar.classList.add("top-0");
}

function closeSidebar() {
  sidebar.classList.add("-top-1000");
  sidebar.classList.remove("top-0");
}

open.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);

floater.addEventListener("click", (e) => {
  if(flag){
    floater.classList.add("right-0");
    floater.classList.remove("-right-25");
    flag = false;
  }else{
    floater.classList.add("-right-25");
    floater.classList.remove("right-0");
    flag = true;
  }
});
