
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

    function setIndex(slidesList) {
        for(var i = 0; i < slidesList.length; i++) {
            slidesList[i].setAttribute('data-slide-index', i);
        }
    }
    setIndex(slidesList);





    Array.from(slidesList).forEach(slide => {
        var slideIndex = slide.dataset.slideIndex;

        if (slideIndex !== '0' ) {
            slide.querySelector('.lunch-slider-track__item-price').style.display = 'none';
            slide.querySelector('.lunch-info-holder').style.display = 'none';
        }

        switch (slideIndex) {
            case '0':
                slide.style.zIndex = 4;
                slide.style.transform = 'translateX(0)';
                break;
            case '1':
                slide.style.zIndex = 3;
                slide.style.transform = 'translateX(90px)';
                slide.getElementsByTagName('img')[0].style.width = '560px';
                slide.getElementsByTagName('img')[0].style.height = '373px';
                break;
            case '2':
                slide.style.zIndex = 2;
                slide.style.transform = 'translateX(170px)';
                slide.getElementsByTagName('img')[0].style.width = '530px';
                slide.getElementsByTagName('img')[0].style.height = '353px';
                break;
            case '3':
                slide.style.zIndex = 1;
                slide.style.transform = 'translateX(250px)';
                slide.getElementsByTagName('img')[0].style.width = '500px';
                slide.getElementsByTagName('img')[0].style.height = '333px';
                break;
        
            default:
                break;
        }
    });


}

lunchSlider();

