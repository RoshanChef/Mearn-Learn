"use strict";
// let x: number | string = 12;
// console.log('x value is ', x);
// x = '23';
// console.log('x value is ', x);
function print_name(a) {
    console.log(typeof a);
    console.log('hello ' + a);
}
print_name("Roshan Kalmathe");
var val = '202';
console.log(val);
// return Type is infered by compiler itself
function sum(a, b) { return a + b; }
console.log("sum ", sum(10, 20));
function isLegall(age) {
    if (age > 18) {
        console.log("you are eligible");
    }
    else {
        console.log("you are not eligible");
    }
}
isLegall(20);
function min(a, b) { return a - b; }
var ans = min(30, 10);
console.log("minus is ", ans);
function delayedfn(fn) {
    setTimeout(fn, 3000);
}
delayedfn(function () {
    console.log('delayed valued shown');
});
function delayedCall(another, timer) {
    setTimeout(another, timer);
}
delayedCall(function () {
    console.log('funccion called');
    return 5;
}, 1000);
