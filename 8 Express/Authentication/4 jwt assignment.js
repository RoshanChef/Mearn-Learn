const jwt = require('jsonwebtoken');
const jwt_secret = 'random23$44';
const zod = require('zod');

const bankAccount = {
    user: 'Roshan',
    account: 133838
}

let token = null;
function encode() {
    token = jwt.sign(bankAccount, jwt_secret);
}

function decode() {
    let data = jwt.verify(token, jwt_secret);
    return data;
}

encode();
let data = decode();
console.log(data);

