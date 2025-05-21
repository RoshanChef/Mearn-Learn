// find polyfill
/*
Array.prototype.ownfind = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('callback should be a function');
    }
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
};
*/

// filter polyfill
// Array.prototype.myfilter = function (callback) {
//     if (typeof callback !== 'function') {
//         throw new Error('callback should be a function');
//     }
//     const arr = this;
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// map polyfill
// Array.prototype.mymap = function (callback) {
//     if (typeof callback !== 'function') {
//         throw new Error('callback should be a function');
//     }
//     const arr = this;
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i], i, arr);
//         if (result)
//             res.push(result);
//     }
//     return res;
// }

// every
// Array.prototype.all_ = function (callback) {

//     if (typeof callback !== 'function') {
//         throw new Error("callback should be function");
//     }
//     const ar = this;
//     let result = true;
//     for (let i = 0; i < ar.length; i++) {
//         result &&= callback(ar[i], i, ar);
//     }
//     return result;
// }

//some
// Array.prototype.so = function (callback) {
//     if (typeof callback !== 'function')
//         throw new Error("callback should be function");
//     const ar = this;
//     let result = false;
//     for (let i = 0; i < ar.length; i++) {
//         result ||= callback(ar[i], i, ar);
//     }
//     return result;
// }

