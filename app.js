
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



























































































// let intro = document.querySelector('.intro');
// let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelectorAll('.logo');

// window.addEventListener('DOMContentLoaded', () => {

//     setTimeout(() => {

//         logoSpan.forEach((span, idx) => {
//             setTimeout(() => {
//                 span.classlist.add("active");
//             }, (idx + 1) * 400)
//         });

//         setTimeout(() => {
//             logoSpan.forEach((span, idx) => {
//                 setTimeout(() => {
//                     span.classlist.remove("active");
//                     span.classlist.add("fade");
//                 }, (idx + 1) * 50)
//             });
        
//         }, 2000)

//         setTimeout(() => {
//             intro.style.top = "-100vh";
//         }, 2300)


//     })
// })