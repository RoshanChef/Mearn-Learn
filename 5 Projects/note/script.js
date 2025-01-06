let list = document.querySelector('#list');
let color = document.querySelector('#color');
let colorBtn = document.querySelector('#colorBtn');
let cnt = 1;
colorBtn.addEventListener('click', function () {
    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = ` 
                 <span class="close">&#10005</span>
                <textarea rows="15" cols="30" placeholder="write content ..."></textarea>`;
    list.appendChild(note);
    if (list.children.length > 1) {
        note.style.cssText = `
        width: max-content;
        border-top: 2rem solid ${color.value || 'yellow'};
        background-color: #333;
        position: absolute;
        left: ${10 + cnt * 80}px; /* Increment position for a staggered effect */
        top: ${10 + cnt * 80}px;
        border-radius: .7rem;
        `;
    }
    cnt++;
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        event.target.parentElement.remove();
        if(list.children >0) cnt--; 
        else cnt = 1;
    }
});

let cursor = {
    x: null,
    y: null,
}

let note = {
    dom: null,
    x: null,
    y: null,
}

document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('note')) {
        cursor = {
            x: event.clientX,
            y: event.clientY,
        }
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
    }
});


document.addEventListener('mousemove', (event) => {
    if (note.dom === null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY,
    }
    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y,
    }
    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
    note.dom.style.cursor = 'grab';
});

document.addEventListener('mouseup', (event) => {
    if (note.dom === null) return;
    note.dom.style.cursor = 'auto';
    note.dom = null;
})

