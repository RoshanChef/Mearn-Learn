"use strict";
// let now = () => {
//     console.log('hi there ');
// }
function info(user) {
    console.log(user.firstName);
    console.log(user.lastName);
}
var obj = {
    firstName: "Govind",
    lastName: "Guru",
    age: 10
};
info(obj);
var mohan = {
    name: 'Rekha',
    age: 23,
    salary: 50000
};
console.log(mohan);
;
;
var user2 = {
    name: "Rahim",
    age: 22,
    gender: "male"
};
var user = {
    name: "roshan",
    age: 22,
    gender: "male",
    address: {
        city: "pune",
        state: "maharashtra",
        country: "india"
    }
};
function isLegal(user) {
    if (user.age >= 18) {
        console.log("user is legal");
    }
    else {
        console.log("user is not legal");
    }
}
isLegal(user);
isLegal(user2);
