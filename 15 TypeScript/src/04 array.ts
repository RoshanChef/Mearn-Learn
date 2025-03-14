// interface user {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// let users: user[] = [{ firstName: "a", lastName: "b", age: 13 }, { firstName: "c", lastName: "d", age: 18 }, { firstName: "e", lastName: "f", age: 24 }];


// users = users.filter((user) => user.age > 18);

// users.forEach(user => console.log(user));  

type obj1 = {
  dept: string,
  age: number
};

type obj2 = {
  name: string,
  age: number
};

type u3 = obj1 | obj2;

let here: u3 = {
  age: 23,
  dept: "CSE",
};

console.log(here.age);

let go = {
  name: 'rohan',
  age: 23,
  color: 'red',
}

let go2: obj2 = go;


console.log(go2.name);
console.log(go2.age);


type re = {
  width: string;
  height: string;
  [key: string]: any; // allows extra properties
};

let wid = "100px";
let hei = "200px";
let norms = "Rectangle";

let user3: re = { wid, hei, norms, width: wid, height: hei };

console.log(user3.norms); // ✅ Outputs: "Rectangle"
console.log(user3.width); // ✅ Outputs: "100px"

