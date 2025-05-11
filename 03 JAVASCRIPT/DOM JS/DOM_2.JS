/*
announcement of browser => event 
    eg .. click , scroll , pointerup , pointerdown

*/


// to view all the events
// monitorEvents(document)


/* Pseudo code
    <event_target>.addEventListener(event_type , fn to be run)
    event_target => component (eg. document , p , h1 , span)'
    event_type => click , double_click , scroll 
    fn => what to do 
*/

// document.addEventListener('click', () => {
//     document.querySelector('h2').style.cssText = "background-color:#333; color:gold;";
//     console.log("hello Roshan");
// })

// function here() {
//     console.log("hello roshan kalmathe");
// }
// // same refrence
// document.addEventListener('click', here);
// document.removeEventListener('click', here);

// diffrent refrence can't work
document.addEventListener('click', () => {
    console.log("Kalmathe Roshan, How is all thing are going on ... ");
})

document.removeEventListener('click', () => {
    console.log("Kalmathe Roshan, How is all thing are going on ... ");
})

let dcs = document.querySelector('.container');

dcs.addEventListener('click', (event_para) => {
    console.log(event_para);
    console.log(event_para.type);
    console.log(event_para.x);
    console.log(event_para.y);
})

// to Prevent the defualt action of an element
let goo = document.querySelector('.google');
goo.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Prevent Default is working my darling ... ");
})

// add multiple event
let my_parent_div = document.createElement('div');


for (let i = 1; i <= 100; i++) {
    let new_ele = document.createElement('p');
    new_ele.textContent = 'This is my Paragraph ' + i;

    my_parent_div.appendChild(new_ele);
}
document.body.appendChild(my_parent_div);

my_parent_div.addEventListener('click', fnx);

function fnx(event) {
    console.log(event.target);
    console.log('This is an event Number .. ', event.target.textContent);
}

console.log(dcs.nodeName);

// target event for the specific elements 
let id = document.querySelector('#wrapper');
id.addEventListener('click', (event) => {
    if (event.target.nodeName === 'SPAN')
        console.log('value is ', event.target.textContent);
    event.stopPropagation();
})