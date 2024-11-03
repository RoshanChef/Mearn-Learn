
// Event Loop
/*
    callback stack  => Browser
            |             | wait
    callback stack  -  Event Queu
    All event
    waiting code
*/

// // sync
// function sync() {
//     console.log('first');
// }
// sync();
//console.log('second');

// async code
// //setTimeout(fnx , time ms)
// setTimeout(() => {
//     console.log("Hello Roshan is here .. ");
// }, 4000);

setTimeout(() => {
    console.log('three');
}, 0);
function frst() {
    console.log('one');
}
frst();
console.log('two');
