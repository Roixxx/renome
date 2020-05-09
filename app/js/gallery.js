const galleryModalHolder = document.querySelector('.gallery__modal-holder');
const galleryModal = document.querySelector('.gallery__modal');



document.addEventListener('click', function(event) {
    event.preventDefault();
    
    let target = event.target;

    if (target.classList.contains('gallery__modal-close')) closeModal();

    if (target.closest('.gallery__modal-arrow')) {
        slideImg(target.closest('.gallery__modal-arrow'));
    }

    target = event.target.firstElementChild;
    if (!target) return;
    if (target.classList.contains('gallery__img-link')) {

        target.parentElement.classList.toggle('gallery-opened');
        
        openImg(target);
    }
});

document.onkeydown = function (e) { 
    if (!document.querySelector('.gallery-opened')) return false;
    
    if (e.code == 'ArrowRight') {
        e.dataset = {dir: 'next'};
        slideImg(e);
    }
    if (e.code == 'ArrowLeft') {
        e.dataset = {dir: 'prev'};
        slideImg(e);
    }
}

function openImg(link) {

    body.classList.toggle('no-scroll');
    galleryModalHolder.classList.add('open');
    dofullImg(link);
}

function closeModal() {

    body.classList.toggle('no-scroll');
    galleryModal.innerHTML = "";
    document.querySelector('.gallery-opened').classList.remove('gallery-opened');
    galleryModalHolder.classList.remove('open');
}

function slideImg(target) {
    
    let opendImg = document.querySelector('.gallery-opened');
    opendImg.classList.remove('gallery-opened');

    let targetImg;

    if (target.dataset.dir == 'prev' && opendImg.previousElementSibling) {

        targetImg = opendImg.previousElementSibling.firstElementChild;
    } 

    if (target.dataset.dir == 'next' && opendImg.nextElementSibling) {

        targetImg = opendImg.nextElementSibling.firstElementChild;
    }

    targetImg.parentElement.classList.add('gallery-opened');
    dofullImg(targetImg.href);
}

function dofullImg(src) {
    galleryModal.innerHTML = `<img src="${src}" alt="fullImg" class="animate fade">`;
}