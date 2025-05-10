/*   changing css properties   */

let obj = document.querySelector('.container');

// single changes 
obj.style.color = "red";
obj.style.backgroundColor = "wheat";
obj.style.padding = '2px';



// multiple changes
obj.style.cssText = "color:gold; background-color:#333; padding:.4em; border-radius:1em;  text-align:center; ";
obj.setAttribute('style', 'background-color:tomato; color:white; padding:1em; ');
obj.setAttribute('id', 'namste');
obj.removeAttribute('class')

//remove existent class and add new class  
obj.setAttribute('class', 'box katha manohar');

// set css properties
obj.style.setProperty('opacity', 0);

// get property of class title
let tar = document.querySelector('.title');
let computed = window.getComputedStyle(tar);
let color = computed.getPropertyValue('color');
console.log(color);

// .className gives the String 
console.log(obj.className);

// array of className
console.log(obj.className.split(' '));

// same thing using classList
console.log(obj.classList);
