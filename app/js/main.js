
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

    animateArr.forEach(element => {
        if (100 > element.getBoundingClientRect().top - document.documentElement.clientHeight) {

            element.style.visibility = 'visible';
            element.style.animationPlayState = 'running';
        };
    });
}


window.addEventListener('scroll', function() {
    $.debounce(doAnimate(), 100);

    $.debounce(fixHeader(), 50000);
});




// Fix header \/

function fixHeader() {
    $(document).ready(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 1){
            $('.menu-holder').addClass("sticky");
        }
        else {
            $('.menu-holder').removeClass("sticky");
        }
    }); 
}