// Your code goes here

function DOMisReady(){
    alert('Welcome to Fun Bus!', false);
}

document.addEventListener('DOMContentLoaded', DOMisReady)

const funBus = document.querySelector('h1');


// function underLineText(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('underLineText');
// }
// console.log(funBus);
// funBus.addEventListener('select', console.log(this.textContent));

// console.log(funBus.textContent);

const topNav = document.querySelector('.nav');

const topTags = topNav.querySelectorAll('.nav-link');

// console.log(topTags);
topTags.forEach(navItem => {
    navItem.addEventListener('focusin', () => {
        navItem.style.fontSize = '2.5rem'
    });
    navItem.addEventListener('focusout', (e) => {
        e.stopPropagation()
        navItem.removeAttribute('style')
        navItem.addEventListener('focusout', () => {
            navItem.style.fontSize = '5rem';
        });
    });
});


const myImages = document.querySelectorAll('img');

function addShadow(e){
    e.stopPropagation();
    e.target.style.boxShadow = '6px 4px black';
}

myImages.forEach(img_item => {
    img_item.addEventListener('mouseover', addShadow);
    img_item.addEventListener('mouseout', removeShadow);

});

function removeShadow(e){
    e.stopPropagation();
    e.target.removeAttribute('style');
}

function changeBodyBGColor(e){
    e.stopPropagation();
    if(e.target.getAttribute('style') === null){
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        e.target.removeAttribute('style');
    }
}

const letsGo = document.querySelector('.content-section .text-content h2');
letsGo.addEventListener('click', changeBodyBGColor);



