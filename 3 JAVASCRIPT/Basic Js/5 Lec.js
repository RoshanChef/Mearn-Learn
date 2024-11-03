// string to object 
let user = '{"name":"roshan" , "roll":30}';
console.log(user);

let charactor = JSON.parse(user);

console.log(charactor);
console.log(typeof (charactor));

console.log('Name is ', charactor.name);

// obj to string 
var obj = { name: 'Krishan', bc: 1572 };
console.log(obj);

let result = JSON.stringify(obj);
console.log(result);
console.log(typeof (result));