const menuIcon = document.querySelector("#menu-icon");
const navClose = document.querySelector("#nav-close")


let timeline = gsap.timeline();
let navTimeLine = gsap.timeline();

timeline.from("#headings h5",{
    opacity: 0,
    duration : 0.8,
    delay: 0.4,
    y:20
})
timeline.from("#headings h1",{
    opacity: 0,
    duration : 0.5,
    y:20
})

timeline.from("#matter #matter-p",{
    opacity: 0,
    duration : 0.8,
    delay:0.4,
    y:20
})

timeline.from("#matter div button",{
    opacity: 0,
    duration : 0.8,
    y:20
})
timeline.from("#matter div p",{
    opacity: 0,
    duration : 0.8,
    y:20
})


navTimeLine.to("#nav-slider",{
    right:0,
    duration:0.5
})

navTimeLine.from("#nav-slider div",{
    x:150,
    duration:0.3,
    opacity:0,
    stagger:0.1
})




navTimeLine.pause();

menuIcon.addEventListener("click",()=>{
     navTimeLine.play();
})

navClose.addEventListener("click",()=>{
    navTimeLine.reverse();
})


gsap.from("#section-two div",{
    opacity:0,
    duration:1,
    y:20,
    scrollTrigger:{
        trigger:"#section-two div",
        scroller:"body",
        start: "top 50%",
    }
})