// Your code goes here

const topNav = document.querySelector('.nav');

const topTags = topNav.querySelectorAll('.nav-link');

// console.log(topTags);
topTags.forEach(navItem => {
    navItem.addEventListener('focusin', (e) => {
        e.preventDefault();
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

function addShadow(){
    this.style.boxShadow = '6px 4px black';
}

myImages.forEach(img_item => {
    img_item.addEventListener('mouseover', addShadow);
    img_item.addEventListener('mouseout', removeShadow);

});

function removeShadow(){
    this.removeAttribute('style');
}

function changeBodyBGColor(){
    if(this.style.backgroundColor !== 'white'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
}

document.body.addEventListener('dblclick', changeBodyBGColor);

