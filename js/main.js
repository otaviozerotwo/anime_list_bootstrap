const navbar = document.getElementById('navbar');

const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});