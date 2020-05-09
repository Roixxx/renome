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
        
        doFullImg(target);
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



function doFullImg(link) {
    body.classList.toggle('no-scroll');
    galleryModalHolder.classList.add('open');
    galleryModal.innerHTML = `<img src="${link}" alt="fullImg" class="animate fade">`;
}

function closeModal() {

    body.classList.toggle('no-scroll');
    galleryModal.innerHTML = "";
    document.querySelector('.gallery-opened').classList.remove('gallery-opened');
    galleryModalHolder.classList.remove('open');
}

function slideImg(target) {
    let opendImg = document.querySelector('.gallery-opened');

    if (target.dataset.dir == 'prev') {
        
        if (opendImg.previousElementSibling) {

            let prevImg = opendImg.previousElementSibling.firstElementChild;

            opendImg.classList.remove('gallery-opened');
            prevImg.parentElement.classList.add('gallery-opened');
            galleryModal.innerHTML = `<img src="${prevImg.href}" alt="fullImg" class="animate fade">`;
        }
    }

    if (target.dataset.dir == 'next') {

        if (opendImg.nextElementSibling) {
<<<<<<< HEAD

            let nextImg = opendImg.nextElementSibling.firstElementChild;

            opendImg.classList.remove('gallery-opened');
            nextImg.parentElement.classList.add('gallery-opened');
            galleryModal.innerHTML = `<img src="${nextImg.href}" alt="fullImg" class="animate fade">`;
        } 
    }
}

//s faf
=======

            let nextImg = opendImg.nextElementSibling.firstElementChild;

            opendImg.classList.remove('gallery-opened');
            nextImg.parentElement.classList.add('gallery-opened');
            galleryModal.innerHTML = `<img src="${nextImg.href}" alt="fullImg" class="animate fade">`;
        } 
    }
}
>>>>>>> parent of 252118d... Update gallery.js
