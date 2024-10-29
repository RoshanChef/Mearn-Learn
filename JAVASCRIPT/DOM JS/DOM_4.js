// let meraPromise = new Promise(function (resolve, reject) {
//     console.log('Promise main hun .. ');
//     resolve(101);
//     // reject(new Error('Hello Roshan, How is the journey'));
// })

// meraPromise.then((val) => {
//     console.log("Promise Resolve ", val);
// })

// meraPromise.catch((error) => {
//     console.log('Promise Rejected => ', error);
// })

// // then and catch in one line
// meraPromise.then((val) => {
//     console.log("resolve val is ", val);
// }, (error) => { console.log('error aayo .. ') })



// // ******* Promises ***********
// let promise_1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("First Promise ... ");
//     }, 4000)
//     resolve("first resolve");
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

// async await
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
    return [dW, gW];
}

// with async await
async function utility_2() {
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

    let dW = await delhiWeather;
    let gW = await gujaratWeather;
    return [dW, gW];
}

// api
// fetch('url' , [options]) for post , fetch('url') for get


