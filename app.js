const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

});

// Toggles full description
function toggleDescription(button) {
    const fullDescription = button.previousElementSibling;  
    const isVisible = fullDescription.style.display === 'block';  

    if (isVisible) {
        fullDescription.style.display = 'none';  
        button.textContent = 'Show More';  
    } else {
        fullDescription.style.display = 'block';  
        button.textContent = 'Show Less';  
    }
}
