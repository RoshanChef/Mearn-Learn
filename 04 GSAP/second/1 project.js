gsap.to('#page2 img', {
    width: '100%',
    scrollTrigger: {
        trigger: '#page2', // for pin parent
        scroller: "body",
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 1.8, // run animation start till end (pass number for smoothness)
        pin: true // stop the parent and run child animation
    }
}); 