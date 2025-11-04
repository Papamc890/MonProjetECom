// Sélection des éléments
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Ajout de l'événement de clic sur le hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-menu .liste a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
