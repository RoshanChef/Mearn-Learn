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

/*  
 Promise.all()
    Waits for all promises to fulfill.
    Fails fast: if any promise rejects, it rejects immediately.
*/
// Promise.all([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));

/*  
Promise.any(promises[])
    Returns the first fulfilled promise
    Ignores rejections
    If all promises reject, it throws AggregateError
*/
// Promise.any([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));

// Promise.race([promise1, promise2]).then(val => console.log(val)).catch(err => console.log(err));

/*
Promise.allSettled()
Waits for all promises to settle (either resolve or reject).
Never fails early.
no need of catch
*/
// Promise.allSettled([promise1, promise2]).then(val => console.log(val));


console.log('I am still working fine'); 
