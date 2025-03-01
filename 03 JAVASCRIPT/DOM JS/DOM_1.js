/*
window
    window object created by browser  
    represent browser window

document 
    entire html code converted into object called as document
*/



function fnx(event_obj) {
    // // add => similar to append
    // element.classList.add('wheat');
    // console.log('HTML content ', element);

    // // reomove => removes specific class
    // element.classList.remove('text');
    // console.log('HTML content ', element);

    // toggle => it switch the class
    element.classList.toggle('text');
    console.log('HTML content ', element);


    console.log(element.classList.contains('text'));
}

// classList 
let element = document.querySelector('.text');
element.addEventListener('click', fnx);
element.className = "yellowgreen";

let ele = document.querySelector('.para');

ele.addEventListener('click', () => {
    console.log('pehila');
})

ele.addEventListener('click', () => {
    console.log('dusra');
    console.log(ele);
})


// // // Add tag only 
// let boxer = document.querySelector('.box');
// // let content = document.createElement('p');
// // boxer.appendChild(content);

// //  //add element
// // let conteny = document.createElement('p');
// // let texy = document.createTextNode('I am with you without any reason');
// // conteny.appendChild(texy);
// // boxer.appendChild(conteny);

// // same way 
// let mypara = document.createElement('p');
// mypara.textContent = 'I am the only guy who works like ';

// boxer.appendChild(mypara);

// /*
//     append anywhere 
//         beforebegin
//         afterbegin

//         beforeend 
//         afterend
//     Using insertAdjacentElement
// */

// // before the element => siblings
// boxer.insertAdjacentElement('beforebegin', mypara);

// // into the element => child
// boxer.insertAdjacentElement('afterbegin', mypara);

// // at the end of the tag
// boxer.insertAdjacentElement('beforeend', mypara);

// // after the element
// boxer.insertAdjacentElement('afterend', mypara); 

//     ******  removing the element *****
let parent_ele = document.querySelector('.parenty');
let child_ele = document.querySelector('.childy');

//Remove child element using parent
parent_ele.removeChild(child_ele);

