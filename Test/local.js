let arr = [{id : 212, name : 'roshan' } , {id : 213, name : 'khushi'}];

let value = (arr.filter((val) => val.id === 212))[0].id; 
console.log('value', value);