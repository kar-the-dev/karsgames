let navBar = document.getElementById("nav");
let navTabP = document.getElementById("open-nav-tab-p");
let navTab = document.getElementById("open-nav-tab");

document.onmousemove = (e) => {
  if (e.clientX >= 120) {
    navBar.style.left = "-100px";
    navTabP.style.transform = "rotate(0deg)";
  } else {
    navBar.style.left = "-1px";
    navTabP.style.transform = "rotate(180deg)";
  }
};
