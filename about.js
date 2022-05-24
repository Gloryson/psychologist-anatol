const leftButton = document.querySelector('.slider__left-button');
const rightButton = document.querySelector('.slider__right-button');
const slides = document.querySelectorAll('.slide');

let x = 0;

rightButton.addEventListener('click', () => {
  
  if (x < 700) {
    x += 103.5;
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${x}%)`;
    })
  }
})

leftButton.addEventListener('click', () => {
  
  if (x > 0) {
    x -= 103.5;
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${x}%)`
    })
  }
})