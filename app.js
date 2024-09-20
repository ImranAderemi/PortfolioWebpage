const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

});

// Toggles full description
function toggleDescription(button) {
    const fullDescription = button.previousElementSibling;  // full description
    const isVisible = fullDescription.style.display === 'block';  

    if (isVisible) {
        fullDescription.style.display = 'none';  // Hides description
        button.textContent = 'Expand';  // Changes button text back to "Expand"
    } else {
        fullDescription.style.display = 'block';  // Shows description
        button.textContent = 'Collapse';  // Change button text to "Collapse"
    }
}





