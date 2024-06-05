let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

const swiper = new Swiper('.swiper', {
    
    pagination: {

        el: '.swiper-pagination',
        clickable: true,
    },
    
    navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

    
});