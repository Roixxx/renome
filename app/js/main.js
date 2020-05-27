

// Animate Scroll \/


let animateArr = Array.from( document.querySelectorAll('.animate') );

animateArr.forEach(element => {
    element.style.animationPlayState = 'paused';
    element.style.visibility = 'hidden';
});

function doAnimate() {

    let scrolled = window.pageYOffset + document.documentElement.clientHeight;

    animateArr.forEach(element => {
        if (scrolled - 150 > element.getBoundingClientRect().top + window.pageYOffset) {

            element.style.visibility = 'visible';
            element.style.animationPlayState = 'running';
        };
    });
}doAnimate();

window.addEventListener('scroll', function(e) {
    $.debounce(doAnimate(), 100);
    fixHeader();
});

// Fix header \/

function fixHeader() {
    $(document).ready(function() {
        if ($(window).scrollTop() > 50){
            $('.menu-holder').addClass("sticky");
        }
        else {
            $('.menu-holder').removeClass("sticky");
        }
    }); 
}

// Burger menu \/
let menuBtn = $('.menu-btn');
menuBtn.on('click', function() {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
    $('.menu-holder').toggleClass('menu-opened');
});

// warning \/

function warning() {
    alert('Sorry, but the service does not work, because this is a demo site.');
}