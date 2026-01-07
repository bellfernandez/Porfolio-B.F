let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}