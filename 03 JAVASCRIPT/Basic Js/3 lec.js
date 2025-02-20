// Math Object 
console.log(Math.random());
console.log(Math.floor(12.99));
console.log(Math.ceil(2.1));
console.log(Math.max(3, 2, 12, 2));
console.log('Mininum ', Math.min(1, 2, -45, 5));
console.log('absolute ', Math.abs(-2));
console.log('value of pi ', Math.PI);

// how to range of random numbers
let min = 5, max = 12;
var value = Math.floor(Math.random() * ((max - min)) + 1) + min;

console.log(value);

// primitive string 
let user = 'Roshan';
console.log(user);

// string as object
// strings are imutable
let lastName = new String('Kalmathe');
console.log(lastName);
console.log(lastName[2]);
console.log('includes ', lastName.includes('Kal'));

console.log('endswith ', lastName.endsWith('then'));
console.log('startswith ', lastName.startsWith('Kal'));

console.log('toUpperCase => ', lastName.toUpperCase());
console.log('toLowerCase => ', lastName.toLowerCase());
console.log('Trim ', ' Roshan kalmathe '.trim(), 'hello');
let val = '  babar  ';
console.log(val);
console.log('Length : ', val.length);

console.log(val.trim());
console.log(val.replace('ba', 'ca'));
console.log('Index is ', val.indexOf('b'));

val = '10';
console.log('type is ', typeof (val));
val = toString(val);
console.log('type is  ', typeof (val));

let make = "hello world world ";
let output = make.lastIndexOf('world');
console.log(output);

var wor = 'harrrikk prashad';
console.log(wor.slice(2, 5)); // (start , end)
console.log(wor.substr(2, 5)); // (start , length) 

console.log(parseInt('20'));
console.log(parseInt('10.22px'));
console.log(parseInt('102.223'));

console.log(parseFloat('120.99'));
console.log(parseFloat("10.332px"));
console.log(parseFloat("10px.2"));

let message = "This is my new home";
console.log(message.replaceAll(' ', ','));
let word = message.split(' ');
console.log("The string is ", word);
console.log(word[0]);
console.log(word[1]);
console.log(word[2]);
console.log(word.length);


// from ascii values to char
val = String.fromCharCode(65);
console.log(val);

//Qn print 'a' to 'z' without using string use string methods


// Template literal 
let literal = `Health is wealth 
and 
'money' is everything`;
console.log(literal);

let test_case = `
Hello ${user}, 
    This message is regarding to the software domain to learn more and earn more 
Thank You.
`;
console.log(test_case);




// Date and Time
let date = new Date();
console.log(date);

let date2 = new Date('Jun 30 2001 10:30');
console.log(date2);

let date3 = new Date(2001, 5, 28, 10, 15, 47);
console.log(date3);

let dat = new Date();
console.log(dat);
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());
console.log(dat.getMinutes());
console.log(dat.getSeconds());

/*
// Arrays 
    collection of items
        - object / Reference Type
*/

let arr = [4, 5, 2, 7];
console.log(arr);

// Insertion
//end   
arr.push(102);
console.log(arr);

//beginnig
arr.unshift(801);
console.log(arr);

//middle
arr.splice(3, 0, 'A');
console.log(arr);


// Searching
// Primitive
console.log(arr);
console.log('A index ', arr.indexOf('A'));
console.log('Having or not ', arr.includes(102));
arr.push('A')
console.log(arr);

//from specific index  
console.log('key is after ', arr.indexOf('A', 4));

// Refrence
let courses = [{ no: 1, sub: 'computer networks' }, { no: 2, sub: 'operating system' }];
// issue
// console.log("index_of ", courses.indexOf({ no: 1, sub: 'computer networks' }));
// console.log('includes ' , courses.includes({ no: 1, sub: 'computer networks' }));

let result = courses.find((val) => val.sub == 'computer networks')
console.log("Result is ", result);


// removing 
let remove = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('NORMAL', remove);

//back 
remove.pop();
console.log('POP ', remove);

//front
remove.shift();
console.log('SHIFT ', remove);

//middle
let num = [12, 2, 55, 33, 45, 56];
num.splice(3, 2);
console.log(num);

var ar = [4, 10, 5, 6, 7, 8, 9, 10, 11, 12];
var greater8 = (num) => num > 8;

// index of first that passes the condition
var value = arr.findIndex(greater8);
console.log('value is ', value);

ar = [10, 20, 30, 40, 50, 60, 70];

// value of first that passes the condition
value = ar.find((num) => num > 30);
console.log(value);

// //copyWithin
arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr.copyWithin(2, 0, 2);
console.log(arr);


// empty array 
let arry = [23, 24, 22, 12, 211];
let arry2 = arry;

console.log(arry);
console.log('Array 2 is ', arry);

// arry = [];
// arry.length = 0;
// arry.splice(0 , arry.length); 
console.log('length ', arry.length);
const n = arry.length

for (let i = 0; i < n; i++) {
    arry.pop();
}
console.log('After is Array 2 is => ', arry2);
console.log(arry);


// combine the array
let first = [1, 2, 3];
let second = [4, 5, 6];
// spread operator ...
// let combine = first.concat(second);
let combine = [...first, ...second];

/*
spread vs rest
spread => 
        copy or spread the values of some other elements
rest =>
        put the rest of the elements in one variable
*/

console.log('combine ', combine);
console.log(combine.slice(2, 4));
console.log('first ', first);
console.log('second ', second);


console.log('combine result is ', combine);

let numbers = [10, 20, 30, 40, 50];
const length = numbers.join(' - ');
console.log(length);


message = "Hello Roshan, Welcome to my new world ";
let new_form = message.split(' ');
console.log(new_form);

console.log(new_form.join(' '));

// sort() => callback must return -ve , +ve or 0
num = [2, 4, 5, 1, 8];
num.sort();
console.log('sorted ', num);
num.reverse();
console.log('reverse ', num);

num = [{ no: 3, sub: 'os' }, { no: 1, sub: 'cn' }, { no: 2, sub: 'coa' }];
// sort as per the no in object 
// wrong way 
num.sort((prev, cur) => {
    return prev.no > cur.no ? prev : cur;
})
num.sort((cur, prev) => cur.no - prev.no);


console.log('value is ', num);
num = [0, 10, 43, 40];
num.sort();
console.log(num);

num = [40, 30, 20, 10];
num.sort((cur, prev) => prev - cur);
console.log(num);
num = num.map((val) => {
    return { value: val };
})
console.log(num);


// take array apply filter and map them 
num = [-5, -1, 2, 6];
// let filtered = num.filter((val) => val > 0);
// let map = filtered.map((val) => { return { value: val } });
// console.log(map);

//short form 
let ans_positive = num.filter((val) => val > 0).map((val) => { return { value: val } });
console.log("Answer is ", ans_positive);

//filter in array of objects
arr = [{ no: 4, subject: 'Math' }, { no: 3, subject: 'Gujarati' }, { no: 1, subject: 'Marathi' }, { no: 2, subject: 'English' }]
let greater2 = arr.filter((val) => val.no > 2);
console.log(greater2);

// sort them 
arr = [{ no: 4, subject: 'Math' }, { no: 3, subject: 'Gujarati' }, { no: 1, subject: 'Marathi' }, { no: 2, subject: 'English' }]
arr.sort((cur, prev) => (cur.no - prev.no));
console.log(arr);