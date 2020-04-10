
$(document).ready(function(){
    $('.h-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        rows: 0
    });
});

// LUNCH SLIDER \/




function lunchSlider() {

    var sliderTrack = document.getElementById('lunch-slider-track');
    var slidesList = sliderTrack.children;
    var sliderNextBtn = document.querySelector('.lunch-slider__btn--next');
    var sliderPrevBtn = document.querySelector('.lunch-slider__btn--prev')


    function setIndex() {
        for(var i = 0; i < slidesList.length; i++) {
            slidesList[i].setAttribute('data-slide-index', i);
        }
    }setIndex();



    function doSlide() {
        var slidesArr = Array.from(slidesList).sort(function (a, b) {
            return a.dataset.slideIndex - b.dataset.slideIndex;
        });
        var width = 600;
        var height = 400;
        var opacity = 1;
        var transform = 0;

        slidesArr.forEach((slide, i) => {

            if (i > 0) {
                width -= 30;
                height -= 20;
                opacity = 0.7;
                transform += 80;
                slide.classList.remove('current-slide');
            } else {
                slide.classList.add('current-slide');
            }

            slide.getElementsByTagName('img')[0].style.width = width + 'px';
            slide.getElementsByTagName('img')[0].style.height = height + 'px';
            slide.style.opacity = opacity;
            slide.style.zIndex = 10 - i;
            slide.style.transform = `translateX(${transform}px)`;

        });
    }doSlide();



    var positionsArr = [0, 1, 2, 3]

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
    }
}

lunchSlider();

