// fetch
// send data to another url and get the data from another url 
// fetch('url').then(raw=>raw.json()).then(Response=>console.log(Response);)

// axios => script cdn 
// axios.get('url').then(result=>console.log(result);)

// fetch('https://catfact.ninja/fact').then((raw) => raw.json()).then(read => console.log(read.length)); 

// console.log("hello Roshan Kalmathe");

axios.get('https://catfact.ninja/fact').then(res => console.log(res.data.fact));