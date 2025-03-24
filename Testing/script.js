let btn = document.querySelector('.btn');


btn.addEventListener('click', async e => {
    let res = await fetch('http://localhost', {
        method: "POST",
        headers: {},
        body: JSON.stringify({ name: "Roshan" })
    });
    let data = await res.text();
    console.log(data);
})