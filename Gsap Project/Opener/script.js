let tl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#main",
            scroller: "body",
            markers: true,
            start: "50% 50%",
            end: "100% 50%",
            pin: true,
            scrub: 1.1
        }
    }
);

tl.to("#main .top", {
    top: "-50%",

}, 'a').to('#main .bottom', {
    bottom: '-50%',

}, 'a').to(".top_h", {
    top: "90%"
}, 'a').to(".bottom_h", {
    bottom: "-80%"
}, 'a')