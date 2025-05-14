const cus_event = new Event('hello');
document.addEventListener('hello', e => {
    console.log('custom event occur ', e);
})
document.dispatchEvent(cus_event);

const event = new CustomEvent('userData', {
    data: {
        username: 'Roshan',
        password: "admin"
    },
    bubbles: 10,
    price: 1200
})

document.body.addEventListener('userData', e => {
    console.log('user data event ', e);
})
document.body.dispatchEvent(event); 