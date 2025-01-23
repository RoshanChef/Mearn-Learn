function getOtp() {
    let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let otp = '';
    for (let i = 0; i <6; i++) {
        otp += Math.floor(Math.random() * ar.length);
    }
    return Number(otp);
}


let btn = document.querySelector('.btn');
let text = document.querySelector('#text');
btn.addEventListener('click', e => {
    text.value = getOtp();
    text.select();
    document.execCommand('copy');
});

