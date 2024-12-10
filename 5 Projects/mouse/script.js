var circle = document.querySelector("#circle");
var frames = document.querySelectorAll('#frame');
const lerp = (x, y, a) => x * (1 - a) + y * a;


document.addEventListener("mousemove", (event) => {
    gsap.to(circle, {
        x: event.clientX,
        y: event.clientY,
        duration: .5,
        ease: Expo
    })
})

frames.forEach(frame => {

    frame.addEventListener('mousemove', (event) => {
        gsap.to(circle, {
            scale: 7,
        })
        gsap.to(frame.children, {
            color: "#fff",
            duration: .3,
            y: "-5vw"
        })
  
        var dims = frame.getBoundingClientRect();

        var frameStart = dims.x;
        var frameEnd = dims.width + dims.x;
        var zero_one = gsap.utils.mapRange(frameStart, frameEnd, 0, 1, event.clientX); //map the value framestart with 0 and frameend with 1

        var variation = lerp(-50, 50, zero_one);  //-50 => initial_val 50 => final_val (0 - initial , 1 - final)
        gsap.to(frame.children, {
            x: variation,
            duration: .5
        })
    })

    frame.addEventListener('mouseleave', (event) => {
        gsap.to(circle, {
            scale: 1,
            opacity: 1
        })
        gsap.to(frame.children, {
            color: "#000",
            duration: .3,
            y: 0
        })
        gsap.to(frame.children, {
            x: 0,
            duration: .5
        })
    })
});


