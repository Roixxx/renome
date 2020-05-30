

// Video
const video = document.body.querySelector('.video-box');
const playBtn = document.body.querySelector('.blog__playpause');

video.addEventListener('click', (e) => playVideo());
playBtn.addEventListener('click', (e) => {playVideo(); video.play()});

function playVideo() {

    if (video.paused) {
        video.setAttribute('controls', '');
        playBtn.style.display = 'none';
    } else {
        playBtn.style.display = 'flex';
    }
}


// Side bar

const blogSideBarHolder = document.body.querySelector('.blog__bar-side-holder');
const blog = document.body.querySelector('.blog');


function fixSideBar() {
    let coord = blog.getBoundingClientRect();

    if (coord.top < 60) {
        blogSideBarHolder.classList.add('bar-fixed');
    } else {
        blogSideBarHolder.classList.remove('bar-fixed');
    } 
}

window.addEventListener('scroll', function(e) {
    fixSideBar();
});
