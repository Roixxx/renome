
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

let lunchSliderTrack = document.getElementById('lunch-slider-track');
let slidesList = lunchSliderTrack.children;

for(let i = 0; i < slidesList.length; i++) {
    
    slidesList[i].setAttribute('data-slide-index', i);
    
}

