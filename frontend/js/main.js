const navbar = document.getElementById('navbar');
const imgUser = document.getElementById('imgUser');

const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add('navbar-fixed');
    imgUser.classList.add('img-user-size-custom');
    imgUser.classList.remove('border-5');
  } else {
    navbar.classList.remove('navbar-fixed');
    imgUser.classList.remove('img-user-size-custom');
    imgUser.classList.add('border-5');
  }
});