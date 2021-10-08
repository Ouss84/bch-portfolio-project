let header = document.querySelector(".main_nav");
let logo = document.querySelector(".logo");
let logoLight = document.querySelector(".logo-light");

let topBtnGal = document.getElementById("btn-top-gal");
logoLight.style = "visibility:hidden";

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("background");
    header.style = "opacity:0.9";
    logo.style = "visibility:hidden";
    logoLight.style = "visibility:visible";
  } else {
    header.classList.remove("background");
    logo.style = "visibility:visible";
    logoLight.style = "visibility:hidden";
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtnGal.style.display = "block";
  } else {
    topBtnGal.style.display = "none";
  }
};
