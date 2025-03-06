let bx = document.querySelector('.box');
let text = document.querySelector('.text');
text.innerHTML = text.innerText.split('').map((val, inx) =>
    `<span style="transform:rotate(${inx * 8.3}deg)">${val}</span>`
).join(''); 