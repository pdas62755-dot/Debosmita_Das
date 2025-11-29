/* Author: Debosmita Das
Date : 28/11/2025 */
// script.js

function hamburger() {
  const menu = document.getElementById('menu-links');
  menu.classList.toggle('active');

  const toggleButton = document.querySelector('.menu-toggle');
  const isActive = menu.classList.contains('active');
  toggleButton.setAttribute('aria-expanded', isActive);
}

// Optional: close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu-links');
  const toggleButton = document.querySelector('.menu-toggle');
  
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', false);
  }
});
