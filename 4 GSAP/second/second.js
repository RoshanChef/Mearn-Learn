gsap.from('#page1 #circle', {
    rotate: 180,
    scale: 0,
    duration: 1,
})

gsap.from('#page2 #circle', {
    rotate: 180,
    scale: 0,
    duration: 1,
    scrollTrigger: "#page2 #circle" // default
    // scrollTrigger: {
    //     trigger: '#page2 #circle',
    //     scroller: "body",
    //     markers: true,
    //     start: 'top 20%',
    //     end: 'top 60%',
    //     scrub: true // start till end
    // }
})


gsap.from('#page3 #circle', {
    rotate: 180,
    scale: 0,
    duration: 1,
    scrollTrigger: "#page3 #circle" // default3
})