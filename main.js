const toggleButton = document.querySelector(".toggle_button");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

toggleButton.onclick = () => {
  if (toggleButton.classList.contains("toggled")) {
    toggleButton.classList.remove("toggled");
    nav.classList.remove("toggle_active");
    overlay.classList.remove("overlay_active");
  } else {
    toggleButton.classList.add("toggled");
    nav.classList.add("toggle_active");
    overlay.classList.add("overlay_active");
  }
};


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});