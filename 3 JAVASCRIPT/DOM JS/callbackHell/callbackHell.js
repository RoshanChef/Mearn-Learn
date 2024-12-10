let btn = document.querySelector('.btn');
let head1 = document.querySelector('.h1');
let head2 = document.querySelector('.h2');
let head3 = document.querySelector('.h3');


btn.addEventListener("click", () => {
    setTimeout(() => {
        head1.style.color = 'green';
        setTimeout(() => {
            head2.style.color = 'red';
            setTimeout(() => {
                head3.style.color = 'royalblue';
            }, 1000);
        }, 1000);
    }, 1000);
}); 