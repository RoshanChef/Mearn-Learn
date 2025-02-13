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

function page2() {
    let right_ele = document.querySelectorAll('.right_ele');

    right_ele.forEach((ele) => {
        ele.addEventListener('mousemove', (e) => {
            let val = ele.childNodes[3].getBoundingClientRect();
            gsap.to(ele.childNodes[3], {
                x: e.x - val.x + 50,
                y: e.y - val.y - 10,
            })
        })

        ele.addEventListener('mouseenter', (e) => {
            gsap.to(ele.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        ele.addEventListener('mouseleave', (e) => {
            gsap.to(ele.childNodes[3], {
                opacity: 0,
                scale: 0
            })

        })
    })
}

page2();

function videoAnimation() {
    let video = document.querySelector('#video');
    let page3_center = document.querySelector('.page3_center');

    page3_center.addEventListener('click', (e) => {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: '0px'
        })
    })

    video.addEventListener('click', () => {
        video.pause();
        gsap.to(video, {
            opacity: 0,
            borderRadius: '20px',
            transform: "scaleX(.7) scaleY(0)",
        })
    })
}

videoAnimation();


let sections = document.querySelectorAll('.section .right');

sections.forEach((ele) => {
    console.log(ele.childNodes[3]);
    ele.addEventListener('mouseenter', () => {
        ele.childNodes[3].style.opacity = 1; 
        ele.childNodes[3].play();
    })
    ele.addEventListener('mouseleave', () => {
        ele.childNodes[3].style.opacity = 0; 
        ele.childNodes[3].load();
    })
})