const main = () => {
    let tl = gsap.timeline();
    tl.to('.image', {
        borderRadius: "0%",
        duration: .8,
        height: "100vh",
        width: "100%",
    })
    tl.from('.header', {
        y: 10
    })
    tl.to('.header', {
        opacity: 1,
        y: 0,
    })
}