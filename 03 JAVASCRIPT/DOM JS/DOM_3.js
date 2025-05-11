/*
Reflow
     - process of calculating Diamension and positioning of an element
     - compationally intense task

Repaint
    - Process of displaying content or an element pixel by pixel 
    - faster than reflow
*/


//task 1 
let t1 = performance.now();
for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'Paragraph ' + i;

    // 1 reflow 1 repaint 
    document.body.appendChild(para);
}
let t2 = performance.now();

console.log('Time of the code First ', (t2 - t1), 'ms');

//task 2 
let t3 = performance.now();

let div = document.createElement('div');
for (let j = 0; j < 100; j++) {
    let para = document.createElement('p');
    para.textContent = 'Para' + (j + 100);

    // didn't append yet 
    div.appendChild(para);
}
// 1 reflow 1 repaint
document.body.appendChild(div);

let t4 = performance.now();
console.log('Time of the code Second ', (t4 - t3), 'ms');

/*   
Document Fragement
    - light weight doc object 
    - no reflow and no repaint
*/
let t5 = performance.now();

let fragement = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'content ' + (i + 1);

    //no reflow no repaint 
    fragement.appendChild(para);
}

// 1 reflow 1 repaint
document.body.appendChild(fragement);

let t6 = performance.now();

console.log('Fragement time is ', t6 - t5);