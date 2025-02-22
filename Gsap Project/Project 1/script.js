
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco();

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


function loadingAnimation(params) {
    
}