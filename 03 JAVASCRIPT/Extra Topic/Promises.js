let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('success1');
    }, 2000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject2');
    }, 3000);
})

// Promise.all([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));
// Promise.any([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));
// Promise.allSettled([promise1, promise2]).then(val => console.log(val));
// Promise.race([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));


console.log('I am still working fine'); 
