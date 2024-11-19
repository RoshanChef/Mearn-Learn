/* Hoisting : Process of moving the fn defination into top of the file done automatically by JS Engine */

run();
// fn defination or fn declaration
function run() {
    console.log('running ... ');
}
//Hoisting not works here 
// stand();

// Named fn assignment
let stand = function walk() {
    console.log('walking ... ');
}

// Anonymous fn assignment
let stand_2 = function () {
    console.log('walking ... ');
}

// stand();
let sign = stand;
sign();
stand();

// Dynamic typed 
function sum(a, b) {
    // special obj
    console.log(arguments);
    return a + b;
}

function sum_2() {
    let total = 0;
    for (let val of arguments) {
        total += val;
    }
    return total;
}

// console.log(sum(2, 3));
// console.log(sum(3));
// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5));

console.log(sum_2(10, 20, 30, 40, 50));


// same thing using rest operator
// function minus(...args_name) {
function minus(a, b, ...args) {
    // a , b and rest of the parameter goes to args (Array)
    console.log(args);
}
minus(10, 2, 30, 40, 50, 60);

function mul(a, b = 20) {
    return a * b;
}

function mul2(a = 10, b, c) {
    return a * b * c;
}

console.log(mul2(undefined, 10, 20));

// getter and setter 
let person = {
    fName: "Kalmathe",
    lName: 'Roshan',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(values) {
        if (typeof values != 'string') {
            throw new Error('Your message is not string ...');
        }
        let parts = values.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

console.log(person.fullName);
person.fullName = "Roshan Malhan";
console.log(person.fullName);

try {
    person.fullName = true;
} catch (e) {
    alert(e);
}
finally {
    console.log('I will always running over the Process');
}

console.log('End of the code ..');

// scope
function walk() {
    var a = 12;
}
// error
// console.log(a);

const a = 13;
let ab = 30;
{
    let ab = 40;
    console.log('concept of ', ab);
}
console.log('concept of ', ab);


// sorting without digit wise
let arr = [10, 5, 4, 20, 30, 35];
arr.sort();

console.log(arr);

arr.sort((v1, v2) => {
    console.log(v1 - v2);
    return v1 - v2;
})

console.log(arr);

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




// how can you call static method
animal.myType();

let dog = new animal('dog', 22);
dog.speak();


let timerId = setTimeout(print, (4000));
function print(){
    console.log('printing the values of the class I have to see');
}

setTimeout(clearTimeout(timerId) , 2000); 
setTimeout(() => {
    console.log('still working ');
}, 5000);
