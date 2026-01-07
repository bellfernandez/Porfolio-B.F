let index = 0;
const slides = document.querySelectorAll('.project');

function showSlide(i) {
  slides.forEach(slide => slide.style.display = "none");
  slides[i].style.display = "block";
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// inicial
showSlide(index);

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
