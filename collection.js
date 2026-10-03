// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// ================================
// HERO ANIMATION
// ================================

gsap.from(".collection-hero .eyebrow", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".collection-hero h1", {
    opacity: 0,
    y: 80,
    duration: 1.4,
    delay: 0.2,
    ease: "power3.out"
});


gsap.from(".collection-hero > p:last-child", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});


// ================================
// SECTION HEADING
// ================================

gsap.from(".section-heading", {
    scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out"
});


// ================================
// SAREE CARDS
// ================================

gsap.utils.toArray(".saree-card").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },

        opacity: 0,
        y: 100,
        scale: 0.96,

        duration: 1.2,

        ease: "power3.out"
    });

});


// ================================
// SAREE IMAGE REVEAL
// ================================

gsap.utils.toArray(".saree-image").forEach((image) => {

    gsap.from(image, {

        scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },

        clipPath: "inset(12% 0% 12% 0%)",

        duration: 1.4,

        ease: "power3.out"
    });

});


// =================================
// THREAD BACKGROUND ANIMATION
// =================================

const threads = gsap.utils.toArray(".thread");


// Draw the threads onto the screen
threads.forEach((thread, index) => {

    const length = thread.getTotalLength();

    gsap.set(thread, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    gsap.to(thread, {
        strokeDashoffset: 0,

        duration: 3 + index * 0.4,

        ease: "power2.out",

        delay: index * 0.15
    });

});


// =================================
// GENTLE THREAD MOVEMENT
// =================================

threads.forEach((thread, index) => {

    gsap.to(thread, {

        x: index % 2 === 0 ? 20 : -20,

        y: index % 2 === 0 ? -15 : 15,

        duration: 4 + index,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});


// =================================
// THREAD MOVEMENT WITH SCROLL
// =================================

gsap.to(".thread-background", {

    y: -120,

    ease: "none",

    scrollTrigger: {

        trigger: "body",

        start: "top top",

        end: "bottom bottom",

        scrub: 2

    }

});