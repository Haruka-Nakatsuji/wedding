"use strict";

const jpStyle = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    end: "top 20%",
    scrub: true,
  },
});

const lace = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 20%",
    end: "center top",
    scrub: true,
  },
});

const collePanel = gsap.timeline({
  scrollTrigger: {
    trigger: ".colle",
    start: "top center",
  },
});

jpStyle.to(".about__bg--top", {
  duration: 1.5,
  width: "150%",
  y: 182,
  x: -14,
});

lace.to(".about__bg--bottom", {
  duration: 1.5,
  width: "150%",
  y: -340,
  x: -10,
});

collePanel.to(".colle__panel--a", { duration: 0.4, opacity: 1, y: -20 });
collePanel.to(".colle__panel--p", { duration: 0.4, opacity: 1, y: -20 });
collePanel.to(".colle__panel--m", { duration: 0.4, opacity: 1, y: -20 });
collePanel.to(".colle__panel--s", { duration: 0.4, opacity: 1, y: -20 });

const hd = document.querySelector(".hd");
const hdBtn = document.querySelector(".nav__contact-btn");

window.addEventListener("scroll", () => {
  if (pageYOffset >= innerHeight / 4) {
    // hd.style.backgroundColor = '#9f2624';
    hd.classList.add("change");
  } else {
    // hd.style.backgroundColor = '#eee6de';
    hd.classList.remove("change");
  }
});

ScrollReveal().reveal(".loca__text", {
  duration: 1000,
  viewFactor: 0.4,
});

const locaBg = ["url(../images/loca_2.jpeg)", "url(../images/loca_1.jpeg)"];
const locaTitle = ["大物ルーキーですが・・・", "ゴールデングラブ賞とれますよ"];
const locaText = [
  "このドレスをきてからは、三振することがなくなりました！",
  "どんな球でもキャッチできるようになりました。TeamUmenoにもおすすめしようと思います。",
];
const locaName = ["佐藤輝様", "梅野様"];

let locaBgNum = 0;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loca__bg").style.backgroundImage =
    locaBg[locaBg.length - 1];
  document.querySelector(".loca__review-title").textContent =
    locaTitle[locaTitle.length - 1];
  document.querySelector(".loca__review-text").textContent =
    locaText[locaText.length - 1];
  document.querySelector(".loca__review-name").textContent =
    locaName[locaName.length - 1];

  setInterval(() => {
    document.querySelector(".loca__secret-bg").style.animation =
      "changeLocaBg 1s";
    document.querySelector(".loca__bg").style.backgroundImage =
      locaBg[locaBgNum];
    document.querySelector(".loca__review-title").textContent =
      locaTitle[locaBgNum];
    document.querySelector(".loca__review-text").textContent =
      locaText[locaBgNum];
    document.querySelector(".loca__review-name").textContent =
      locaName[locaBgNum];
    setTimeout(() => {
      document.querySelector(".loca__secret-bg").style.animation =
        "changeLocaBg2 1s";
    }, 2000);
    locaBgNum++;
    if (locaBgNum === 2) {
      locaBgNum = 0;
    }
  }, 30000);
});

// アコーディオンメニュー（めんどくさかったからコピペ⭐︎） -----------------------------------

const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
};

const slideDown = (el, duration = 300) => {
  el.classList.add("is-open");
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

const slideToggle = (el, duration = 300) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

const accordions = document.querySelectorAll(".js-accordion");
const accordionsArr = Array.prototype.slice.call(accordions);

accordionsArr.forEach((accordion) => {
  const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
  const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);

  accordionTriggersArr.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.classList.toggle("is-active");
      const content = trigger.querySelector(".faq__accordion-content");
      slideToggle(content);
    });
  });
});
