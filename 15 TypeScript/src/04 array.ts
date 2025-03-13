interface user {
  firstName: string;
  lastName: string;
  age: number;
}

let users: user[] = [{ firstName: "a", lastName: "b", age: 13 }, { firstName: "c", lastName: "d", age: 18 }, { firstName: "e", lastName: "f", age: 24 }];


users = users.filter((user) => user.age > 18);

users.forEach(user => console.log(user)); 