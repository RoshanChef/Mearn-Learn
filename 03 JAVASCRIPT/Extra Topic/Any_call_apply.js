// let obj = {
//   name: "Roshan",
//   age: 23,
//   Designation: "Software Engineer",
//   print: function () {
//     console.log(this);
//   },
// };

// obj.print();

// // changing this pointer
// let obj2 = {
//   name: "Shubham",
//   age: 33,
//   Designation: "Data Engineer",
//   avoid() {
//     console.log(
//       "Avoid everything you need to learn new world in the copy ... ",
//     );
//   },
// };

// obj.print.call(obj2);

// make it generic
let obj = {
    name: "Akshay Kumar",
    age: 54,
    Designation: "Actor",
};

let obj2 = {
    name: "Sonu Nigam",
    age: 34,
    Designation: "Singer",
};

const print = function (state, country) {
    if (state) console.log(this, state, country);
    else console.log(this, country);
};

// call method - it takes object as an argument and changes the this pointer (this->obj)
print.call(obj);
print.call(obj2);

print.call({ name: "roshan", age: 23 }, "Gujarat", "India");

// apply method - same as call method but it takes array as an argument
print.apply({ name: "roshan", age: 23 }, ["Vadodara", "India"]);

// bind method - same as call method but it returns a function
const binded = print.bind({ name: "roshan", age: 23 }, "Vadodara", "India");
binded();
binded();
binded();
