gsap.from('#page1 #circle', {
    rotate: 180,
    scale: 0,
    duration: 1,
})

gsap.from('#page2 #circle', {
    rotate: 180,
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#page2 #circle',
        scroller: "body",
        markers: true,
        start: 'top 20%',
        end: 'top 60%',
        scrub: true // start till end
    }
})