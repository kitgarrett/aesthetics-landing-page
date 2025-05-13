let slider = document.querySelector('.logo-slider');
let slides = Array.from(slider.children);
let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');

// Set up automatic scrolling
let autoScroll = setInterval(() => {
  let nextIndex = slides.findIndex(slide => slide === slider.scrollLeft);
  if (nextIndex === slides.length - 1) nextIndex = 0;
  slider.scrollTo(slides[nextIndex].offsetLeft, 0);
}, 3000);

// Navigation buttons
nextBtn.addEventListener('click', () => {
  let currentIndex = slides.findIndex(slide => slide === slider.scrollLeft);
  if (currentIndex === slides.length - 1) currentIndex = -1;
  slider.scrollTo(slides[currentIndex + 1].offsetLeft, 0);
});

prevBtn.addEventListener('click', () => {
  let currentIndex = slides.findIndex(slide => slide === slider.scrollLeft);
  if (currentIndex === 0) currentIndex = slides.length;
  slider.scrollTo(slides[currentIndex - 1].offsetLeft, 0);
});
