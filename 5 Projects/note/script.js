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
    console.log(list.children.length);
    if (list.children.length > 1) {
        console.log('close all list');
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
        cnt--;
    }
});