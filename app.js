document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  const button = document.querySelector('.button');
  const background = document.querySelector('.header-background')

  function randomizeBackground() {
    const randomNum = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    const selector = 'url(assets/backgroundPicture' + `${randomNum}.jpg)`;
    background.style.backgroundImage = selector;
  }
  button.addEventListener('click', randomizeBackground);
});
