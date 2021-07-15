'use strict';

const jpStyle = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: 'top 20%',
        scrub: true,
    }
});

const lace = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 20%",
        end: 'center top',
        scrub: true,
    }
});

const collePanel = gsap.timeline({
    scrollTrigger: {
        trigger: ".colle",
        start: "top center",
    }
});

jpStyle.to('.about__bg--top', {
    duration: 1.5,
    width: '150%',
    y: 182,
    x: -14
})

lace.to('.about__bg--bottom', {
    duration: 1.5,
    width: '150%',
    y: -340,
    x: -10
})

collePanel.to('.colle__panel--a', {duration: .4, opacity: 1, y: -20});
collePanel.to('.colle__panel--p', {duration: .4, opacity: 1, y: -20, });
collePanel.to('.colle__panel--m', {duration: .4, opacity: 1, y: -20,});
collePanel.to('.colle__panel--s', {duration: .4, opacity: 1, y: -20,});

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

ScrollReveal().reveal('.loca__text', {
    duration: 500,
    viewFactor: 0.4, 
});

const locaBg = [
    'url(../images/loca_1.jpeg)',
    'url(../images/loca_2.jpeg)'
]

let locaBgNum = 0;

window.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.loca__bg').style.backgroundImage = locaBg[1];

    setInterval(() => {
        document.querySelector('.loca__secret-bg').style.animation = 'changeLocaBg 1s';
        document.querySelector('.loca__bg').style.backgroundImage = locaBg[locaBgNum];
        setTimeout(() => {
            document.querySelector('.loca__secret-bg').style.animation = 'changeLocaBg2 1s';
        }, 2000);
        locaBgNum++;
        if(locaBgNum === locaBg.length) {
            locaBgNum = 0;
        }
    }, 30000);
});