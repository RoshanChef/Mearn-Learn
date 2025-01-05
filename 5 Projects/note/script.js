let list = document.querySelector('#list');
let color = document.querySelector('#color');
let colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', function () {
    let note = document.createElement('div');
    note.classList.add('note');
    note.textContent - `
     <span class="close">&#10005</span>
    <textarea rows="15" cols="30" placeholder="write content ..."></textarea>
    `;
    list.appendChild(note);

});

