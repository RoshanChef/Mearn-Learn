var g = 10, j = '10';
console.log('value check == ', g == j);
console.log('value and DT check === ', g === j);

let a = 1;
do {
    console.log(a++);
} while (a <= 10)

console.log('end of the code ... ', a);

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(10, 20, 30) / 10);
