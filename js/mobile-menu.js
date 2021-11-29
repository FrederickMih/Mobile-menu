const mobileMenuBars = document.querySelector('.mobile-menu-container');

function closeMenu() {
  mobileMenuBars.style.left = '-110%';
}

document.querySelectorAll('.mobile-nav-link').forEach((list) => {
  list.addEventListener('click', () => {
    mobileMenuBars.style.left = '-110%';
  });
});

document
  .querySelector('.hamburger-close-menu')
  .addEventListener('click', closeMenu);

function OpenMenu() {
  mobileMenuBars.style.left = '0';
}

document
  .querySelector('.hamburger-open-menu')
  .addEventListener('click', OpenMenu);
