
const tl = gsap.timeline()
tl.fromTo('.poster', {
    opacity: 0,
    scale: 0,
}, {
    opacity: 1,
    scale: 1.2,
    duration: 2,
    delay: 0.1
} , 0.2)
.fromTo('.quote', {
    opacity: 0,
} , {
    opacity: 1,
    duration: 1,
    delay: 0.1
}, )
.fromTo('.quotemark', {
    opacity: 0,
    y: -200,
}, {
    opacity: 1,
    y: 0,
    duration: 1,
})
.fromTo('.signature', {
    opacity: 0,
    y: 100,
}, {
    opacity: 1,
    y: 0,
    duration: 1,
})

tl.fromTo('.wrapper-price', {
    opacity: 0,
    x: 100,
    scale: 0,
}, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1,
}, 2)


tl.fromTo('.direction-anim', {
    opacity: 0,
    scale: 0,
    y: 100,
}, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5
}, 2)
.fromTo('.btn-dir', {
    opacity: 0,
    y: 100,
}, {
    opacity: 1,
    duration: 1,
    y: 0,
}, 2)
.fromTo('.timeline__item', {
    opacity: 0,
    x:-100,
}, {
    opacity: 1,
    duration: 1,
    x: 0,
}, 2)

tl.fromTo('.swiper-workout',{
    opacity: 0,
    x: -100,
}, {
    opacity: 1,
    x: 0,
    duration: 1,
}, 3)

tl.fromTo('.swiper-couch',{
    opacity: 0,
    x: 100,
}, {
    opacity: 1,
    x: 0,
    duration: 1,
}, 3)

tl.fromTo('.slider-foto',{
    opacity: 0,
    x: 100,
}, {
    opacity: 1,
    x: 0,
    duration: 1,
}, 2)
.fromTo('.span-foto',{
    opacity: 0,
    y:-100,
}, {
    opacity: 1,
    y: 0,
    duration: 1,
}, 2)

tl.fromTo('.main-win',{
    opacity: 0,
    scale: 0,
}, {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5
}, 2)


tl.fromTo('.header__logo', {
    opacity: 0,
    y:-100,
},
{
    opacity: 1,
    y: 0,
    duration: 1,
}, 2.3)
.fromTo('.bx-grid-alt',{
    opacity: 0,
    x: -100,
}, {
    opacity: 1,
    x: 0,
    duration: 1,
}, 2.3)

















































































































































