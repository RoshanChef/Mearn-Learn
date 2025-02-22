let tl = gsap.timeline();
tl.from(".con", {
    duration: 1,
    top: '35rem',
    height: "5vh",
    width: "80vw",
    borderRadius: ".8rem"
})

tl.from('.main p', {
    y: 20,
    stagger: 1,
    opacity: 0,
})