// Normal Function
function print() {
    console.log('Welcome to the JS World .. ');
}
print();

function sum(a, b) {
    s = a + b;
    return s;
}
console.log('sum is ', sum(10, 15));

// Arrow Function 
let align = (a, b) => {
    return a + b;
}

// .... compact version of function
let sumision = () => a + b;
console.log('sum is ', align(100, 20));


//function printing ... 
console.log(sumision); //defination of function

let log = () => console.log('Welcome Roshan Kalmathe');

log();



/*     Practice Questions  */
//string => number of vowel in string 
function no_vowel(a) {
    ans = 0;
    for (let val of a)
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u')
            ans++;

    return ans;
}
console.log(no_vowel('roshan'));



//using arrow function 
let no_vowel_arrow = (a) => {
    ans = 0;
    for (let val of a)
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u')
            ans++;
    return ans;
}

let vowel = no_vowel_arrow('aeiou');
console.log(vowel);

//In JS functiion can be passed as an argument and also assigned and returned 

//  ........ example ..........
function sum(a, b) { return a + b }

function give(sum) {
    return sum;
}

// see how callbacks works
function call(sum) {
    console.log(arguments);
    console.log(sum);
}

let value = give(sum(100, 20));
console.log("value is ", value);

function arithmethic(a, b, fnx) {
    return fnx(a, b);
}

let add = arithmethic(20, 10, (a, b) => a + b);
let min = arithmethic(20, 10, (a, b) => a - b);
let mul = arithmethic(20, 10, (a, b) => a * b);
let div = arithmethic(20, 10, (a, b) => a / b);

console.log('sum ', add);
console.log('minus ', min);
console.log('mul ', mul);
console.log('division ', div);


// forEach method
// Array.forEach(fn(value , index , Array)); 

let arr = [20, 30, 40, 50, 'Rohan'];
function printing(val, index, arry) {
    console.log(val, ' = ', index, arry);
}

//forEach method take funtion as an argument and run for each member return nothing
arr.forEach(printing);

// Practice Que
// array of number give the squre of each value 
let values = [10, 20, 30, 40, 50];

values.forEach((val) => {
    console.log('squere of ', val ** 2);
})


// map method in Array
// array.map(fn(value , index , Array))  return an array 
let num = [10, 20, 30, 40, 50, 60, 70, 80];
console.log('\n');
num.map((val) => {
    console.log('value are ', val);
})

let new_arr = num.map((val) => {
    return val * 2;
})

console.log('\n');
console.log(new_arr);

console.log('value of Array ', num);
let filtered = num.filter((val) => {
    return (val / 10 & 1) === 0;
})
console.log(filtered);

// reduce method : Reduce the array and gives the single value
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15


// Question 
// maximum of array 
num = [4, 5, 2, 30, 10];
const maxi = num.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
})
console.log(maxi);

// greater than 90 
marks = [84, 86, 85, 95, 91, 99, 92, 96];
const topper = marks.filter((val) => {
    return val > 90;
})

console.log(topper);
// let number = [];
// let n = (prompt('enter the number '));

// for (i = 1; i <= n; i++) {
//     number[i - 1] = i;
// }
// sum all number in array using reduce 
// const summy = number.reduce((prev, cur) => {
//     return prev + cur;
// })
// console.log('Sum is ', summy);

// product all number in array using reduce 
// const pro = number.reduce((prev, cur) => {
//     return prev * cur;
// })
// console.log('Product is ', pro);

// // fn values()
let ar = [10, 30, 40, 50, 55, 59, 60, 70];
let iterator = ar.values();

// for (let i of iterator) {
//     console.log(i);
// }

// ar.reverse();
console.log(ar.at(4));
console.log(ar);



// //from fnx => create array from Array like object
// let obj = { 0: 'orange', 1: 'apple', 2: 'maroon', 3: 'Lemon', length: 4 };
// ar = Array.from(obj);
// console.log(ar);

ar = [4, 10, 33, 5, 6, 7, 8];

console.log(ar.some((a) => a > 10));
console.log(ar.every((a) => a > 3));


let cnt = 'a';

switch (cnt) {
    case 1.2:
        console.log("float number");
        break;
    case "roshan":
        console.log("String value")
        break;
    case 2:
        console.log("Number value");
        break;
    case 'a':
        console.log("char value");
        break;
    default:
        console.log("default value ");
        break;
}