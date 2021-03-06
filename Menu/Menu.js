
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu reference. 
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class

// Using your menuButton reference, add a click handler that calls toggleMenu
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function (e) {
  e.target = toggleMenu();
});