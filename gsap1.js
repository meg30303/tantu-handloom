gsap.registerPlugin(ScrollTrigger);
var tl=gsap.timeline()
tl.from(".navbar",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
tl.from(".hero-content",{
    y:30,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:0.2
})
gsap.to(".card1", {
    rotation: -15,
    y: -40,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.to(".card2", {
    rotation: 0,
    y: -80,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.to(".card3", {
    rotation: 15,
    y: -40,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});