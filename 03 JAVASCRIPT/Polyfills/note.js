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