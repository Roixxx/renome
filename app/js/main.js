
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
        Array.from(slidesList).forEach(slide => {
            var slideIndex = slide.dataset.slideIndex;

            slide.classList.remove('current-slide');

            switch (slideIndex) {
                case '0':
                    slide.style.zIndex = 4;
                    slide.style.transform = 'translateX(0)';
                    slide.getElementsByTagName('img')[0].style.width = '600px';
                    slide.getElementsByTagName('img')[0].style.height = '400px';
                    slide.style.opacity = '1';
                    slide.classList.add('current-slide');
                    break;
                case '1':
                    slide.style.zIndex = 3;
                    slide.style.transform = 'translateX(90px)';
                    slide.getElementsByTagName('img')[0].style.width = '560px';
                    slide.getElementsByTagName('img')[0].style.height = '373px';
                    slide.style.opacity = '0.7';
                    break;
                case '2':
                    slide.style.zIndex = 2;
                    slide.style.transform = 'translateX(170px)';
                    slide.getElementsByTagName('img')[0].style.width = '530px';
                    slide.getElementsByTagName('img')[0].style.height = '353px';
                    slide.style.opacity = '0.7';
                    break;
                case '3':
                    slide.style.zIndex = 1;
                    slide.style.transform = 'translateX(250px)';
                    slide.getElementsByTagName('img')[0].style.width = '500px';
                    slide.getElementsByTagName('img')[0].style.height = '333px';
                    slide.style.opacity = '0.7';
                    break;
            
                default:
                    break;
            }
            return;
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

