
// HEADER SLIDER \/

$(document).ready(function(){
    $('.h-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        rows: 0,
    });
});

// LUNCH SLIDER \/

function lunchSlider() {

    var slidesList = document.getElementById('lunch-slider-track').children;
    var sliderNextBtn = document.querySelector('.lunch-slider__btn--next');
    var sliderPrevBtn = document.querySelector('.lunch-slider__btn--prev');

    var slideWidth = slidesList[0].offsetWidth;
    var slideHeight = slidesList[0].offsetHeight;


    function doSlide() {
        var slidesArr = Array.from(slidesList).sort(function (a, b) {
            return a.dataset.slideIndex - b.dataset.slideIndex;
        }),
        width = slideWidth,
        height = slideHeight,
        opacity = 1,
        transform = 0,
        position = 'static';

        slidesArr.forEach((slide, i) => {

            if (i > 0) {
                width -= 30;
                height -= 20;
                opacity = 0.7;
                transform += 80;
                position = 'absolute';
                slide.classList.remove('current-slide');
            } else {
                slide.classList.add('current-slide');
            }

            (slidesArr.length - 1 == i) ? slide.classList.add('last-slide') : slide.classList.remove('last-slide');
            

            slide.style.width = width + 'px';
            slide.style.height = height + 'px';
            slide.style.opacity = opacity;
            slide.style.zIndex = 10 - i;
            slide.style.transform = `translateX(${transform}px)`;
            slide.style.position = position;
        });
    }


    var positionsArr = Array.from({ length: slidesList.length }, (v, i) => i);


    sliderNextBtn.addEventListener('click', () => {
        positionsArr.unshift(positionsArr[positionsArr.length - 1]);
        positionsArr.pop();
        setPositions();
    });

    sliderPrevBtn.addEventListener('click', () => {
        positionsArr.push(positionsArr[0]);
        positionsArr.shift();
        setPositions();
    });

    function setPositions() {
        for (let i = 0; i < slidesList.length; i++) {
            slidesList[i].setAttribute('data-slide-index', positionsArr[i]);
        }
        doSlide();
    }setPositions();
}

lunchSlider();



// Animate Scroll \/


var animateArr = Array.from( document.querySelectorAll('.animate') );

animateArr.forEach(element => {
    element.style.animationPlayState = 'paused';
    element.style.visibility = 'hidden';
});

function doAnimate() {

    var scrolled = window.pageYOffset + document.documentElement.clientHeight;

    animateArr.forEach(element => {
        if (scrolled - 150 > element.getBoundingClientRect().top + window.pageYOffset) {

            element.style.visibility = 'visible';
            element.style.animationPlayState = 'running';
        };
    });
}doAnimate();

window.addEventListener('scroll', function() {
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
var menuBtn = $('.menu-btn');
menuBtn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  $('.menu-holder').toggleClass('menu-opened');
});