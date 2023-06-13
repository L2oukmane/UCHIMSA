function openMenu() {
  const menuTab = document.querySelector(".menu__btn");
  const closeTab = document.querySelector(".close__btn");
  const mobileMenu = document.querySelector(".mobile__menu");
  menuTab.addEventListener("click", () => {
    menuTab.style.display = "none";
    mobileMenu.style.display = "flex";
    closeTab.style.display = "flex";
  });
  closeTab.addEventListener("click", () => {
    menuTab.style.display = "flex";
    mobileMenu.style.display = "none";
    closeTab.style.display = "none";
  });
}

openMenu();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
