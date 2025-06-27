const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  if (menu.style.left === '0%') {
    menu.style.left = '-100%';
  } else {
    menu.style.left = '0%';
  }
});
