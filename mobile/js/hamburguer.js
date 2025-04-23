const navHamburguer = document.getElementById('nav-hamburguer');
const navLinks = document.querySelector('.nav-links');

navHamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});