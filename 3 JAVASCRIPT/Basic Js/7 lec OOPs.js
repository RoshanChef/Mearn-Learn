/*    
OOP is JS

*/

// Classes and objects 

// Proto Type
let student = {
    age: 18,
    printMarks: function () {
        console.log('My age is ', this.age);
    }
}

student.printMarks();


let employee = {
    tax: 18,
    calcTax() {
        console.log('Tax rate is ', this.tax);
    }
}

let karan = {
    salary: 10000,
    calcTax() {
        console.log('Tax is 20%');
    }
}

karan.__proto__ = employee; 


