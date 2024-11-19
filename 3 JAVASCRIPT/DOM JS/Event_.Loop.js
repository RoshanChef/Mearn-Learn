/*
    anycode which take some time js will consider all of that code as async code
*/

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

// fetch
// send data to another url and get the data from another url 
// fetch('url').then(raw=>raw.json()).then(Response=>console.log(Response);)

// url ('https://catfact.ninja/fact')

// cdn <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js" integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

// axios => script cdn 
// axios.get('url').then(result=>console.log(result.data);)

