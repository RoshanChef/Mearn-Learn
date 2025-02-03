function show() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

show()


gsap.to('#bottle', {
    rotate: -375,
    scale: .5,
    scrollTrigger: {
        trigger: '#bottle',
        scroller: '#main',
        start: 'top 0%',
        end: 'top -443%',
        scrub:true,
        pin: true,
    }
})

let t1 = gsap.timeline()
t1.from("#main #page1_dog_image", {
    opacity: 0,
    duration: .81,
    scale: 0.1,
    stagger: true,
})

t1.from("#bottle", {
    opacity: 0,
    duration: .91,
    scale: 0.2,
})
