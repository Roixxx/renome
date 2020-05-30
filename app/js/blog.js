





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
