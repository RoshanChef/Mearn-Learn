let cookie = document.querySelector('.cookie');
let local = document.querySelector('.local');
let session = document.querySelector('.session');

cookie.addEventListener('click', (e) => {
    let date = new Date();
    document.cookie = `name = dhara; expires = ${date}; max-age=10;`;
})

local.addEventListener('click', (e) => {
    localStorage.name = 'lacal';
})

session.addEventListener('click', (e) => {
    sessionStorage.name = 'session';
})