num = [40, 30, 20, 10];
num.sort();
console.log(num);
num = num.map((val) => {
    console.log(val);
    return val ; 
})
console.log(num);