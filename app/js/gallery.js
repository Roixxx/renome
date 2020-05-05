

document.addEventListener('click', function(event) {

    let target = event.target.firstElementChild;
    if (target.classList.contains('gallery__img-link')) {
        doFullImg(target);
    }
});


let galleryModalHolder = document.querySelector('.gallery__modal-holder');
let galleryModal = document.querySelector('.gallery__modal');

function doFullImg(link) {

    body.classList.toggle('no-scroll');
    galleryModalHolder.style.display = "flex";
    galleryModal.innerHTML = `<img src="${link}" alt="fullImg">`;

}



