

document.addEventListener('click', function(event) {
    event.preventDefault();
    //console.log(event.target);

    if (event.target.classList.contains('gallery__modal-close')) {
        closeModal();
    }

    if (event.target.closest('.gallery__modal-arrow')) {
        slideImg(event.target.closest('.gallery__modal-arrow'));
    }


    let target = event.target.firstElementChild;
    if (!target) return;
    if (target.classList.contains('gallery__img-link')) {

        target.parentElement.classList.toggle('gallery-opened');
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

function closeModal() {
    body.classList.toggle('no-scroll');
    galleryModalHolder.style.display = "none";
    galleryModal.innerHTML = "";
}

function slideImg(target) {
    let opendImg = document.querySelector('.gallery-opened');

    console.log(target);

    if (target.dataset.dir == 'prev') {
        
        if (opendImg.previousElementSibling) {

            let prevImg = opendImg.previousElementSibling.firstElementChild;

            opendImg.classList.remove('gallery-opened');
            prevImg.parentElement.classList.add('gallery-opened');
            galleryModal.innerHTML = `<img src="${prevImg.href}" alt="fullImg">`;
        }
    }

    if (target.dataset.dir == 'next') {
        if (opendImg.nextElementSibling) {

            let nextImg = opendImg.nextElementSibling.firstElementChild;

            opendImg.classList.remove('gallery-opened');
            nextImg.parentElement.classList.add('gallery-opened');
            galleryModal.innerHTML = `<img src="${nextImg.href}" alt="fullImg">`;
        } 
    }
}