let prev = document.querySelector('.prev');
let back = document.querySelector('.reverse');
let next = document.querySelector('.next');
let seeMore = document.querySelectorAll('.intro button');
let carosel = document.querySelector('.carosel');
let listHTML = document.querySelector('.list');

next.onclick = function () {
    showNext('next');
}
prev.onclick = function () {
    showNext('prev');
}
back.onclick = function () {
    carosel.classList.remove('seeDetails'); 
}


let showNext = (type) => {
    carosel.classList.remove('active', 'preActive');
    let items = document.querySelectorAll('.item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carosel.classList.add('active');
    }
    else {
        let len = items.length;
        listHTML.prepend(items[len - 1]);
        carosel.classList.add('preActive');
    }
}

seeMore.forEach((ele) => {
    ele.onclick = function () {
        carosel.classList.add('seeDetails');
    }
})

