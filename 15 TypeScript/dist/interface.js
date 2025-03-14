"use strict";
var person = {
    age: 23,
    name: "Roshan",
    great: function () { return "hello " + person.name; },
};
// console.log(person.great());
var Manager = /** @class */ (function () {
    function Manager(name, age) {
        this.name = name;
        this.age = age;
        this.number = "454";
    }
    Manager.prototype.great = function () {
        return "Good Morning !!";
    };
    Manager.prototype.get = function () {
        console.log("name : ".concat(this.name, "\nage : ").concat(this.age));
    };
    return Manager;
}());
var rohan = new Manager("Rohan", 23);
console.log(rohan.name);
console.log(rohan.age);
console.log(rohan.number);
rohan.get();
console.log(rohan.great());
var lv = {
    name: "give me the name"
};
