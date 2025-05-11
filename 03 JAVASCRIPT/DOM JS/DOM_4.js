/*
Promises handles any asynchronous tasks like api calls,
                                             file loading, etc.. 

Note : we handle asynchronous code that runs after synchronous code.


Contains three states

Pending : initial state
Fullfilled : task completed and result is available
Rejected : task failed and result is unavailable

 Syntaxt : 
        let promise = new Promise(function(resolve, reject){

        //perform asynchronous task

        if(operation Success){
            resolve('success full');
        }else{
            reject('task failed');
        }

        })

        promise.then((message)=>{
            console.log(message);
        }); 



*/



let meraPromise = new Promise(function (resolve, reject) {
    let value = Math.random();
    if (value > .5) {
        resolve(value);
    }
    else {
        reject(new Error('less than .5'));
    }

})

meraPromise.then((val) => {
    console.log("Promise Resolve ", val);
})

meraPromise.catch((error) => {
    console.log('Promise Rejected => ', error);
})

// // then and catch in one line
// meraPromise.then((val) => {console.log("resolve val is ", val); },
//     (error) => { console.log('error aayo .. ')  }
// )

// // other way 
// meraPromise.then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.log(error);
// })

// // ******* Promises ***********
// let promise_1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//     resolve("first resolve");
//     }, 4000)
//         console.log("First Promise ... ");
// })

// let output = promise_1.then(() => {
//     let promise_2 = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('Second Promise ... ');
//         }, 6000)
//         resolve('second resolve');
//     })
// })

// console.log(output.then((val) => { console.log('value is ', val); }));

// // how to make any code async => always return promise
// async function Hello() {
//     return "I am async code ..";
// }
// console.log('Returning to ', Hello());
// console.log("console ... ");

// async-await (used for any code dependent on asynronous code )
//without async await
async function utility() {
    // paralell promise
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Delhi Weather ');
        }, 8000);
    });

    let gujaratWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gujarat Weather ');
        }, 6000);
    });

    let dW = delhiWeather;
    let gW = gujaratWeather;

    let tar = document.createElement('h3');
    tar.textContent = `${dW} and ${gW}  `;
    document.body.appendChild(tar);

    return [dW, gW];
}

val = utility();
console.log(val);

// with async await
async function utility() {
    // paralell promise
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Delhi Weather ');
        }, 8000);
    });

    let gujaratWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gujarat Weather ');
        }, 6000);
    });

    let dW = await delhiWeather; // wait till delhiWeather not come 
    let gW = await gujaratWeather; // wait till gujaratWeather not come

    // await after lines are on hold 
    let tar = document.createElement('h3');
    tar.textContent = `${dW} and ${gW}  `;
    document.body.appendChild(tar);

    console.log('hello am i on hold');

    return [dW, gW];
}

let val = utility();
console.log(val);

// api
// fetch('url' , [options]) for post , fetch('url') for get

function namy() {
    let i = 'Roshan';
    function cally() {
        console.log('function 2 .. ', i);
    }
    console.log('function 1 .. ');
    return cally;
}

// closure => fnx + refrences of used var in fnx
let fnx = namy();
console.log(fnx);
fnx();

/*
closure =>
     fn that retains access to variables from their containing scope even after the parent fn has finished excution
*/

