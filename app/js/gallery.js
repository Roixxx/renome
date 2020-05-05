

document.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__modal-close')) {
        closeModal();
    }

    if (event.target.closest('.gallery__modal-arrow')) {
        slideImg(event.target);
    }


    let target = event.target.firstElementChild;
    if (!target) return;
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

function closeModal() {
    body.classList.toggle('no-scroll');
    galleryModalHolder.style.display = "none";
    galleryModal.innerHTML = "";
}

function slideImg(target) {
    if (target.dataset.dir == 'prev') {
        
        if () {
            
        }

    }
}