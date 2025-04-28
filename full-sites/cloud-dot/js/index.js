// JavaScript to toggle the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// JavaScript to set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;