// saving the output for the same input rather than calculating again and again.

function sum(num) {
    let value = 0;
    for (let i = 1; i <= num; i++) {
        value += i;
    }
    return value;
}



// using Memoization
function memo(fnx) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            cache[n] = fnx(n);
            console.log('added sucessfully');
            console.log(cache);
            return cache[n];
        }
    }
}

let fnxs = memo(sum); 
console.time('Memo')
console.log(fnxs(10000));
console.timeEnd('Memo'); 

console.time('Time');
console.log(sum(10000));
console.timeEnd('Time');

console.time('Memo'); 
console.log(fnxs(10000));
console.timeEnd('Memo'); 


