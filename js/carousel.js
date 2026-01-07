let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".project");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function updateCarousel() {
  const width = slides[0].offsetWidth + 40;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
