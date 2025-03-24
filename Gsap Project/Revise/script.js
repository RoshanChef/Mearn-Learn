function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".con"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".con", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".con").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();

gsap.from('.box1', {
  duration: 2,
  x: 100,
  rotate: 180,
  backgroundColor: '#ffff76',
  opacity: 0,
  clearProps: "opacity"
});

gsap.from('.box2', {
  x: -1000,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: '.page2',
    scroller: '.con',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 0.3,
    pin: true,
  }
});

gsap.from('.box3', {
  duration: 1,
  x: -1000,
  opacity: 0,
});
