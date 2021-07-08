'use strict';

const jpStyle = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: 'top 30%',
        scrub: true,
    }
});

const lace = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 30%",
        end: 'top top',
        scrub: true,
    }
});

jpStyle.to('.about__bg--top', {
    duration: 1.5,
    width: '150%',
    y: 162,
    x: -14
})

lace.to('.about__bg--bottom', {
    duration: 1.5,
    width: '150%',
    y: -340,
    x: -10
})

const hd = document.querySelector('.hd');
const hdBtn = document.querySelector('.nav__contact-btn');

window.addEventListener('scroll', () => {
    if(pageYOffset >= innerHeight / 4) {
        // hd.style.backgroundColor = '#9f2624';
        hd.classList.add('change');
    } else {
        // hd.style.backgroundColor = '#eee6de';
        hd.classList.remove('change');
    }
});