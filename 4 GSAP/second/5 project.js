

function splitting() {
    // logic 
    let head1 = document.querySelectorAll('h1');
    head1.forEach((ele) => {
        let ar = ele.textContent.split('');
        let cut = '';
        ar.forEach((el) => {
            cut += `<span>${el}</span>`
        })
        ele.innerHTML = cut;
    })
}

function gsapAnimation() {
    gsap.to('#page2 h1 span', {
        color: '#E3E3C4',
        stagger: .1,
        scrollTrigger: {
            trigger: '#page2 h1',
            scroller: "body",
            start: 'top 50%',
            end: 'top -10%',
            scrub: 1 // start till end
        }
    })
}

splitting();
gsapAnimation();    