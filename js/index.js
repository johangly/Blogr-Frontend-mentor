const $hamburguer = document.querySelector('.hamburguer'),
    hamburguerOpenImg = 'img/icon-hamburger.svg',
    hamburguerCloseImg = 'img/icon-close.svg',
    $navMenu = document.querySelector('.navigation');

let $hamburguerImg = document.querySelector('#hamburguerImg');
let counter = 0;

// nav menu show eventListener
$hamburguer.addEventListener('click', e => {
    counter = counter + 1;
    if (counter == 1) {
        $hamburguerImg.src = 'img/icon-close.svg';
        $navMenu.classList.add('display');
        counter = counter - 2;
    } else {
        $hamburguerImg.src = "img/icon-hamburger.svg";
        $navMenu.classList.remove('display');
    }

});