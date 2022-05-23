const helloToAbout = document.querySelector('.title__hello');
const nameToWork = document.querySelector('.title__name');
const professionToContact = document.querySelector('.title__profession');
const mainTapElementForMobile = document.querySelector('.tap__here');

function getScreenHeight () {
  document.documentElement.style.setProperty('--js-height', `${window.innerHeight - 0.01}px`)
}

window.addEventListener('resize', getScreenHeight);
getScreenHeight();

helloToAbout.addEventListener('mouseover', () => {
  helloToAbout.textContent = 'Обо мне';
});

helloToAbout.addEventListener('mouseout', () => {
  helloToAbout.textContent = 'Привет.';
});

nameToWork.addEventListener('mouseover', () => {
  nameToWork.textContent = 'Работа';
});

nameToWork.addEventListener('mouseout', () => {
  nameToWork.textContent = 'Я Анатолий';
});

professionToContact.addEventListener('mouseover', () => {
  professionToContact.textContent = 'Контакты';
});

professionToContact.addEventListener('mouseout', () => {
  professionToContact.textContent = 'Психолог';
});

mainTapElementForMobile.addEventListener('click', () => {
  mainTapElementForMobile.classList.toggle('nextPosition');
  if (mainTapElementForMobile.classList.contains('nextPosition')) {
    helloToAbout.textContent = 'Обо мне';
    nameToWork.textContent = 'Работа';
    professionToContact.textContent = 'Контакты';
  } else {
    helloToAbout.textContent = 'Привет.';
    nameToWork.textContent = 'Я Анатолий';
    professionToContact.textContent = 'Психолог';
  }
})