
const tabsLinksArr = Array.from(document.querySelectorAll('.tab-menu__link'));
const tabsArr = Array.from(document.querySelectorAll('.tab-menu__section'));

tabsLinksArr.forEach(link => link.addEventListener('click', function (e) {
    e.preventDefault();
    doTab(e.target);
}));

function doTab(target) {

    tabsLinksArr.forEach(link => {link.classList.remove('active');})
    
    tabsArr.forEach(tab => {
        tab.style.display = 'none';

        
        if (tab.dataset.tabMenuSection == target.dataset.tabMenuSection) {
            tab.style.display = 'block';
            target.classList.add('active')
        }
    });
}

document.getElementById("defaultOpen").click();



// BTN

const addToCartBtnArr = Array.from(document.querySelectorAll('.tab-menu__btn'));

addToCartBtnArr.forEach(btn => btn.addEventListener('click', function (e) {
    e.preventDefault();
    warning();
}));