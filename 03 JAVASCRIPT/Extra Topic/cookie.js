let cookie = document.querySelector('.cookie');
let local = document.querySelector('.local');
let session = document.querySelector('.session');

cookie.addEventListener('click', (e) => {
    document.cookie = 'name = dhara ';
})

local.addEventListener('click', (e) => {
    localStorage.name = 'lacal';
})

session.addEventListener('click', (e) => {
    sessionStorage.name = 'session';
})