function animation() {
    gsap.to('.page1 #img1', {
        opacity: '1',
        duration: 2,
        rotate: '0deg',
        x: 360
    })
    gsap.to('.page1 #img2', {
        rotate: '0deg',
        opacity: '1',
        duration: 2,
        x: -360
    })

    gsap.from('nav h1:nth-child(1)', {
        duration: 1,
        x: -100,
        opacity: 0,
        rotate: '30deg'
    })
    gsap.to('.page1 .content h2', {
        scale: 2,
        duration: 1
    })
}
animation();

