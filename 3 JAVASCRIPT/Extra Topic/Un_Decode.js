let message = 'Hello respose is going to be send so be careful';

let encode = encodeURI(message);
let decode = decodeURI(encode);


console.log(decode);