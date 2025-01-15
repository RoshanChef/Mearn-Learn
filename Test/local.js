let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let circle = document.createElement('div');
    circle.className = 'circle';
    document.querySelector('.main').appendChild(circle);
    circle.style.cssText = `
    background-color: ${document.querySelectorAll('input')[0].value}
    `;
})

let circle = {
    dom: null,
    left: null,
    top: null
}

let cursor = {
    x: null,
    y: null
}


document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('circle')) {
        circle.dom = event.target;
        circle.left = event.target.getBoundingClientRect().left;
        circle.top = event.target.getBoundingClientRect().top;


        cursor.x = event.clientX;
        cursor.y = event.clientY;

    }
})


document.addEventListener('mousemove', function (event) {
    if (circle.dom === null) return;

    let current = {
        x: event.clientX,
        y: event.clientY
    }
    let distance = {
        x: current.x - cursor.x,
        y: current.y - cursor.y
    }

    circle.dom.style.left = circle.left + distance.x + 'px';
    circle.dom.style.top = circle.top + distance.y + 'px';

    circle.dom.style.cursor = 'grab';
})

document.addEventListener('mouseup', function (event) {
    if (circle.dom === null) return;

    circle.dom.style.cursor = 'auto';
    circle.dom = null;
})   