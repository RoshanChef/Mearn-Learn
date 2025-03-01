function sum(a) {
    return function (b) {
        return a + b;
    }
}

// without currying 
let fnx = sum(10);
console.log(fnx(20));

// //with currying
console.log('value is ', sum(10)(20));

/*
Infinite currying
*/

function add(a) {
    return function (b) {
        if (b) {
            let sum = a + b;
            return add(sum); //without call it doesn't work
        }
        else
            return a;
    }
}


let fn = add(10);
let res = fn(20);

console.log("result: ", res());

console.log(add(30)());

console.log(add(10)(20)(30)());
