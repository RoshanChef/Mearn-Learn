/*
OOP is JS

*/

// Classes and objects

// Proto Type
// let student = {
//     age: 18,
//     printMarks: function () {
//         console.log('My age is ', this.age);
//     }
// }

// student.printMarks();


// let employee = {
//     tax: 18,
//     calcTax() {
//         console.log('Tax rate is ', this.tax);
//     }
// }

// let karan = {
//     salary: 10000,
//     calcTax() {
//         console.log('Tax is 20%');
//     }
// }

// karan.__proto__ = employee;

// ***** classes *****
// // class
// class Tesla {
//     // custom consturctor

//     constructor(price) {
//         this.price = price;
//     }
//     start() {
//         console.log("starting ... ");
//     }
//     stop() {
//         console.log("stoping ... ");
//     }
//     price = 22000
//     get() {
//         console.log("price of car is ", this.price);
//     }
//     set_price(price) {
//         this.price = price;
//     }
// }

// let car1 = new Tesla(10000);
// car1.start();

// // inheritance
// class Tata extends Tesla {
//     constructor() {
//         super(); //to call parent constuctor without this it gives error
//         console.log("Tata custom constructor");
//     }
//     work() {
//         console.log("work like an hell");
//         super.stop();
//     }

// }

// let car2 = new Tata();
// car2.work(); 

//Questions 
class User {
    constructor(uname, email) {
        this.uname = uname;
        this.email = email;
    }
    viewData() {
        console.log("userName ", this.uname);
        console.log("email ", this.email);
    }
}
