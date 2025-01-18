let obj = {
    age: 22,
    name: 'Roshan'
}
let data = { ...obj, age: 11 };

console.log('first ', obj);
console.log('second ', data);