// let now = () => {
//     console.log('hi there ');
// }

// function useSome(a: number): [a: number, b: number] {
//     let val = 10, val2 = 30;
//     return [val, val2];
// }

// const ar = useSome(10);
// console.log(ar);    

function great(user: { name: string, age: number }) {
    console.log("Hello ", user.name);
}

great({ name: "Roshan", age: 18 });

// object 
let user: { name: string, age: number } = {
    name: "Roshan",
    age: 23
}

// auto infrened
let obj = {
    call: "take",
    roll: 230
};

console.log("Name : ", user.name);
console.log("Age : ", user.age);
