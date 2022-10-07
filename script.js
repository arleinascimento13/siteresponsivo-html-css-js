var menu = document.querySelector('nav ul')
var menuBar = document.querySelector('nav .menu-icon')
var iconMenu = document.querySelector('nav')
var menuIcon = document.querySelector('.menu-icon img')
var button = document.querySelector('ul button')


menuBar.addEventListener('click',function(){
    menu.classList.toggle('active')
    menuIcon.setAttribute('src', 'imgs/close.png')
    button.setAttribute('style', '    background-color: #f1676d;')
    }
)