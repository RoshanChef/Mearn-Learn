console.log('hello roshan');

//object creation
const person = {
    name: 'Roshan',
    age: 10,
    fult() {
        console.log("do something to learn new things ..");
    }
};

//factory function
function createFun() {
    return get = {
        length: 122,
        breadth: 12,
        draw() {
            console.log('drawing is going on .. ');
        }
    }
}
let obj = createFun();


//constructor function
function home(len, bre) {
    this.length = len,
        this.breadth = bre,
        this.draw = function () {
            console.log('Drawing is done using pen ...');
        }
}


// // inbuit constructor in js 
// let home = new Function('len', 'bre', ` this.length = len,
//     this.breadth = bre,
//     this.draw = function () {
//         console.log('Drawing is done using pen ...');
//     }`); 

//object creation using constructor function
let obj1 = new home(30, 50);

// console.log('Lenght is ', obj1.length);
// console.log('Breadth is ', obj1.breadth);
// console.log(obj1);


console.log(obj1.constructor);
console.log(home.constructor);

/*

    primitive copied by value
    references copied by address 

    Primitive 
        Number 
        string 
        Boolean 
        undefine
        Null 

    Reference
        object 
        array 
        function
        
    */


let a = 12;
let b = a;

a = 22;
console.log("value of a ", a);
console.log("value of b ", b);


//refrence variable 
/*  
function
object 
array 
*/

// //object
// let a_obj = { value: 10 };
// let b_obj = a_obj;
// a_obj.value++;
// console.log(a_obj.value);
// console.log(b_obj.value);


// //function
// let Number = 10;
// function inc(Number) {
//     Number++;
// }
// inc(Number);
// console.log('the number is ', Number);

// let n_obj = { value: 10 };
// function increment(n_obj) {
//     n_obj.value++;
// }
// increment(n_obj);
// console.log("see the magic ", n_obj.value);


// let em = {
//     val: 12,
//     con: 'Roshan'
// }

//for-in loop Access the key , value , key & value
// for (key in em) {
//     console.log(key, " - ", em[key]);
// }

// console.log(Object.keys(em));
// console.log(Object.values(em));
// console.log(Object.entries(em));

// console.log("object are those value to learn new thing like that .. ");


// //for-of loop useful for iterable eg. array , maps
// for (key of Object.values(em)) {
//     console.log(key);
// }


//something exist in object or not ? 
let nuy = {
    age: 12,
    val: 'Roshan'
}

if ('color' in nuy)
    console.log('YES');
else
    console.log('NO');


//cloing of object  
let src = { val: 10 };

// //1 iterable
// let dest = {};
// for (key in src) {
//     dest[key] = src[key];
// }

// for (let key in dest) {
//     console.log(key, ' - ', dest[key]);
// }

//  //2 assign
// let dest = Object.assign({}, src);
// console.log('value is ', dest.val);
// dest.val++; 
// console.log(src.val);


// //3 spread
let a_obj = { val: 12, grade: 'A' };
let b_obj = { ...a_obj };
console.log('copy value is ', b_obj.val, '\n', b_obj.grade);

// link with lecture 4