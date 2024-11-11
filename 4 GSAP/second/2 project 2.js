gsap.to('#page2 h1', {
    transform: 'translatex(-120%)',
    scrollTrigger: {

        trigger: '#page2',
        // trigger: '#page2 h1', //another use case
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        pin: true
    }

})