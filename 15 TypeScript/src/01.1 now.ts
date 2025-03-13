// let now = () => {
//     console.log('hi there ');
// }

// function useSome(a: number): [a: number, b: number] {
//     let val = 10, val2 = 30;
//     return [val, val2];
// }

// const ar = useSome(10);
// console.log(ar);    

// function great(user: { name: string, age: number }) {
//     console.log("Hello ", user.name);
// }

// great({ name: "Roshan", age: 18 });

// // object 
// let user: { name: string, age: number } = {
//     name: "Roshan",
//     age: 23
// }

// // auto infrened
// let obj = {
//     call: "take",
//     roll: 230
// };

// console.log("Name : ", user.name);
// console.log("Age : ", user.age);

interface userType {
    firstName: string,
    lastName: string,
    age: number
}

function info(user: userType) {
    console.log(user.firstName);
    console.log(user.lastName);
}

let obj: userType = {
    firstName: "Govind",
    lastName: "Guru",
    age: 10
};

info(obj);

// union
type employee = {
    name: string,
    age: number
};

type sal = {
    salary: number
};

type team = employee & sal;

const mohan: team = {
    name: 'Rekha',
    age: 23,
    salary: 50000
};

console.log(mohan);

/*
interface
  why interface is used  
    => to define type of this complex object 

*/
interface Address {
    city? : string,
    state: string,
    country: string,
};
interface User {
    name: string,
    age: number,
    gender: string,
    address?: Address
};

let user2: User = {
    name: "Rahim",
    age: 22,
    gender: "male"
}

let user = {
    name: "roshan",
    age: 22,
    gender: "male",
    address: {
        city: "pune",
        state: "maharashtra",
        country: "india"
    }
};

function isLegal(user: User): void {
    if (user.age >= 18) {
        console.log("user is legal");
    } else {
        console.log("user is not legal");
    }
}

isLegal(user);
isLegal(user2); 