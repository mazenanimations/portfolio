const label = document.querySelector(".label");
const navbarToggler = document.getElementById("navbarToggler");
const togglerLine1 = document.querySelector(".navbar-toggler-icon .line1");
const togglerLine2 = document.querySelector(".navbar-toggler-icon .line2");
const togglerLine3 = document.querySelector(".navbar-toggler-icon .line3");
const togglerBorder = document.querySelector(".select");
const dropDown = document.querySelector(".myDrop");
const body = document.querySelector("body");

let isMenuOpen = false;
let isClickable = true; 

navbarToggler.addEventListener("click", function () {
  if (isClickable) {
    isClickable = false;
    
    setTimeout(() => {
      isClickable = true; 
    }, 350);

    // Continue with the existing functionality
    if (isMenuOpen) {
      event.stopPropagation();
      label.style.marginTop = "0vh";
      togglerLine2.style.width = "70%";
      togglerLine2.style.left = "0%";
      togglerLine3.style.transform = "rotate(0deg)";
      togglerLine3.style.bottom = "0";
      togglerLine1.style.transform = "rotate(0deg)";
      togglerLine1.style.top = "0";
      togglerBorder.style.color = "rgba(255, 255, 255, 0)";
      isMenuOpen = false;
    } else {
      label.style.marginTop = "20vh";
      togglerLine2.style.width = "0%";
      togglerLine2.style.left = "40%";
      togglerLine3.style.transform = "rotate(45deg)";
      togglerLine3.style.bottom = "45%";
      togglerLine1.style.transform = "rotate(-45deg)";
      togglerLine1.style.top = "45%";
      togglerBorder.style.color = "rgba(255, 255, 255, 0.7)";
      isMenuOpen = true;
    }
  }
});

let isDropdownOpen = false;

dropDown.addEventListener("click", function () {
  event.stopPropagation();
  if (isDropdownOpen) {
    label.style.marginTop = "20vh";
    isDropdownOpen = false;
  } else {
    label.style.marginTop = "35vh";
    isDropdownOpen = true;
  }
});

document.body.addEventListener("click", function () {
  if (isDropdownOpen) {
    label.style.marginTop = "20vh";
    isDropdownOpen = false;
  }
});

