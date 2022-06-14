const leftButton = document.querySelector('.slider__left-button');
const rightButton = document.querySelector('.slider__right-button');
const slides = document.querySelectorAll('.slide');
const modalWindowSlide = document.querySelector('.modal__slide');
const modalWindowSlideClose = document.querySelector('.modal__close');

let x = 0;

rightButton.addEventListener('click', () => {
  
  if (x < 900) {
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

slides.forEach(slide => {
  let index = slide.getAttribute('id');
  slide.addEventListener('click', () => {
    modalWindowSlide.classList.remove('off');
    modalWindowSlideClose.classList.remove('off');
    modalWindowSlide.style.backgroundImage = `url(./img/certificate${index}.jpg)`;
    modalWindowSlide.style.backgroundSize = '90vmin';
  })
})

modalWindowSlideClose.addEventListener('click', () => {
    modalWindowSlide.classList.add('off');
    modalWindowSlideClose.classList.add('off');
})