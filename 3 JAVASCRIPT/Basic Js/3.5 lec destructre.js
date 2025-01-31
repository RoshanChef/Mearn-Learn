let ar = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let [a, b] = ar;

console.log('a ', a, ' b ', b);

let [first, , , ...args] = ar;
console.log(first, args);

let { name, fName } = { name: 'Roshan', fName: 'Kalmathe' };

let { a_val, b_val } = { name: 'Roshan', fName: 'Kalmathe' };
console.log(a_val, b_val);
console.log(name, fName);


let obj = {
    age: 22,
    name: 'Roshan'
}
let data = { ...obj, age: 11 };

console.log('first ', obj);
console.log('second ', data);

//Again different way 
let now = { ...obj, ['name']: 'Krishan' };
console.log(now);

console.log('befor ', obj);

delete obj.name

console.log('after ', obj);



function call() {
    let surname = 'Vanela';
    let age = 10;

    return { age, surname };
}


let val = call();
console.log(val);

let { length } = 'calling work';
console.log('len ', length);