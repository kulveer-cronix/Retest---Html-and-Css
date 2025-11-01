let menu_bar = document.querySelector('.nav-list');
let menu_toggle = document.querySelector('.menu-toggle')
menu_toggle.addEventListener('click', function() {
    menu_toggle.classList.toggle('is-open')
    menu_bar.classList.toggle('active')
})