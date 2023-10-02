const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + vw/2; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
  // console.log(sticky.offsetTop)
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  // console.log(calcDynamicHeight(horizontal))
});


let moon = document.getElementById('moon');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let boat1 = document.getElementById('boat1');
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let water = document.getElementById('water');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    moon.style.left = value * 1.25 + 'px';
})

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    reflection.style.left = value * 1.22 + 'px';
})

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    cloud1.style.left = value * 0.9 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    cloud2.style.left = value * 0.8 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star1.style.left = value * 1.3 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star2.style.left = value * 1.5 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star3.style.left = value * 1.7 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star4.style.left = value * 1.4 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    boat1.style.left = value * 1.6 + 'px';
})
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    water.style.left = value * 0.7 + 'px';
})