function navAnimation() {
    let nav = document.querySelector('nav');

    nav.addEventListener('mouseenter', e => {
        let tl = gsap.timeline();
        tl.to('.nav_part3', {
            height: '23vh',
        })

        tl.to('.nav_part2 h5', {
            display: 'block',
        })

        tl.to('.nav_part2 h5 span', {
            y: 0,
            stagger: { amount: .6 },
            duration: .2,
        })
    });
    nav.addEventListener('mouseleave', e => {
        let tl = gsap.timeline();


        tl.to('.nav_part2 h5 span', {
            y: 20,
            stagger: { amount: .2 },
        })
        tl.to('.nav_part2 h5', {
            display: 'none',
            duration: .1
        })
        tl.to('.nav_part3', {
            height: 0,
            duration: .2
        })
    });
}

navAnimation(); 