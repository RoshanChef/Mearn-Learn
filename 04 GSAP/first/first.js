// gsap.to("#box1", {
//     duration: 1,
//     x: 1000,
//     delay: 1
// })

// gsap.to("#box2", {
//     duration: 2,
//     x: 1000,
//     delay: 2,
//     rotate: 360
// })

// same thing can be done using this
// timeline usefull for one after another
let tl = gsap.timeline();

tl.from('#box1', {
    x: 1000,
    duration: 2,
    rotate: 360
})

tl.from('#box2', {
    x: 1000,
    duration: 2,
    rotate: 360
})

tl.from('#box3', {
    x: 1000,
    duration: 2,
    rotate: 360
})

// more shorthand

// gsap.to('.box', {
//     x: 1000,
//     delay: 1,
//     stagger: 1
// })


/*

gsap.send(selection , { starting css}); 
//send => from , to 
from                      to 

timeline : all the gsap one after another
stagger : applying same animation to the multiple ele which perfome one after another

*/