// let x: number | string = 12;
// console.log('x value is ', x);

// x = '23';
// console.log('x value is ', x);

function print_name(a: string) {
    console.log(typeof a);

    console.log('hello ' + a);
}

print_name("Roshan Kalmathe");

let val: string = '202';
console.log(val);

// return Type is infered by compiler itself
function sum(a: number, b: number) { return a + b; }
console.log("sum ", sum(10, 20));

function isLegal(age: number): void {
    if (age > 18) {
        console.log("you are eligible");
    } else {
        console.log("you are not eligible");
    }
}

isLegal(20);

function min(a: number, b: number): number { return a - b; }

let ans = min(30, 10);
console.log("minus is ", ans);


function delayedfn(fn: () => void) {
    setTimeout(fn, 3000);
}

delayedfn(function () {
    console.log('delayed valued shown');
})

function delayedCall(another: () => number, timer: number) {
    setTimeout(another, timer);
}

delayedCall(function () {
    console.log('funccion called');
    return 5;
}, 1000); 


