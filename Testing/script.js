let obj = [{ id: 1, val: 'Roshan' }, { id: 2, val: 'Dhara' }];

console.log(obj);

obj.sort((prev, cur) => cur.id - prev.id); 
console.log(obj);