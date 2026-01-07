let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".project");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const visibleCards = 3;

function updateCarousel() {
  const cardWidth = slides[0].offsetWidth + 30;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - visibleCards) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
