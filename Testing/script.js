let obj = [{ id: 1, val: 'abc' }, { id: 2, val: 'ayz' }];

obj.sort((a, b) => (b.val).localeCompare(a.val));
console.log(obj);

obj.sort((a, b) => (a.val).localeCompare(b.val));
console.log(obj);