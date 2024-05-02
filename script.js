const menuIcon = document.querySelector("#menu-icon");
const navClose = document.querySelector("#nav-close")


let timeline = gsap.timeline();
let navTimeLine = gsap.timeline();
let tl = gsap.timeline();

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
    duration:0.7,
    y:20,
    scrollTrigger:{
        trigger:"#section-two div",
        scroller:"body",
        start: "top 50%",
    }
})

gsap.from("#mobile-section-two div",{
    opacity:0,
    duration:0.7,
    y:20,
    scrollTrigger:{
        trigger:"#mobile-section-two div",
        scroller:"body",
        start: "top 60%",
    }
})


gsap.from("#card-container div",{
    opacity:0,
    duration:0.7,
    y:20,
    scrollTrigger:{
        trigger:"#card-container div",
        scroller:"body",
        start: "top 80%",
    }
})

gsap.from("#laptop-second-section div",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#laptop-second-section div",
        scroller:"body",
        start: "top 50%",
    }
})
gsap.from("#laptop-thrid-section div",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#laptop-thrid-section div",
        scroller:"body",
        start: "top 50%",
    }
})

gsap.from("#mobile-second-section #mb-section-1",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#mobile-second-section",
        scroller:"body",
        start: "top 50%",
    }
})
gsap.from("#mobile-second-section #mb-section-2",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#mobile-second-section",
        scroller:"body",
        start: "top 40%",
    }
})
gsap.from("#mobile-second-section #mb-section-3",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#mobile-second-section",
        scroller:"body",
        start: "top 30%",
    }
})
gsap.from("#mobile-second-section #mb-section-4",{
    opacity:0,
    duration:0.7,
    x:"-100%",
   
    scrollTrigger:{
        trigger:"#mobile-second-section",
        scroller:"body",
        start: "top -10%",
    }
})
gsap.from("#mobile-second-section #mb-section-5",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#mobile-second-section",
        scroller:"body",
        start: "top 10%",
    }
})


gsap.from("#laptop-fourth-section",{
    opacity:0,
    duration:0.7,
    x:"100%",
    scrollTrigger:{
        trigger:"#laptop-fourth-section",
        scroller:"body",
        start: "top 50%",
    }
})

gsap.from("#mobile-third-section",{
    opacity:0,
    duration:0.7,
    x:"100%",
    scrollTrigger:{
        trigger:"#mobile-third-section",
        scroller:"body",
        start: "top 60%",
    }
})

gsap.from("#fourth-section-mobile-one",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#fourth-section-mobile-one",
        scroller:"body",
        start: "top 60%",
       
    }
})


gsap.from("#fourth-section-laptop-one",{
    opacity:0,
    duration:0.7,
    x:"-100%",
    scrollTrigger:{
        trigger:"#fourth-section-laptop-one",
        scroller:"body",
        start: "top 50%"
    }
})

gsap.from("#fourth-section-laptop-two",{
    opacity:0,
    duration:0.7,
    x:"100%",
    scrollTrigger:{
        trigger:"#fourth-section-laptop-two",
        scroller:"body",
        start: "top 50%",
    }
})

gsap.from("#fourth-section-mobile-two",{
    opacity:0,
    duration:0.7,
    x:"100%",
    scrollTrigger:{
        trigger:"#fourth-section-mobile-two",
        scroller:"body",
        start: "top 60%",
    }
})

gsap.from("#fifth-laptop-section",{
    opacity:0,
    duration:0.5,
    x:"-100%",
    scrollTrigger:{
        trigger:"#fifth-laptop-section",
        scroller:"body",
        start: "top 50%",
    }
})
gsap.from("#fifth-laptop-section div",{
    opacity:0,
    duration:0.5,
    x:"50%",
    stagger:0.3,
    scrollTrigger:{
        trigger:"#fifth-laptop-section",
        scroller:"body",
        start: "top 50%"
    }
})
gsap.from("#fifth-mobile-section",{
    opacity:0,
    duration:0.5,
    x:"-100%",
    scrollTrigger:{
        trigger:"#fifth-mobile-section",
        scroller:"body",
        start: "top 50%"
    }
})
gsap.from("#fifth-mobile-section div",{
    opacity:0,
    duration:0.5,
    x:"100%",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#fifth-mobile-section div",
        scroller:"body",
        start: "top 50%"
    }
})