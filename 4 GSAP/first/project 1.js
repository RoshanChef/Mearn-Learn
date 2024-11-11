let tl = gsap.timeline();

tl.from('nav h3', {
    y: -50,
    opacity: 0,
    delay: .4,
    duration: .8,
    stagger: .3
})

tl.from('h1', {
    x: -150,
    opacity: 0,
    delay: .4,
    duration: .8,
    stagger: .3
})

tl.from('img', {
    opacity: 0,
    rotate: 45,
    x: 150,
    duration: .5,
    stagger: .5

})