var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 98%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
},'sameTime')

tl.to("#orangeSlice",{
    top: "160%",
    left: "22%"
},'sameTime')

tl.to("#orange",{
    width: "15%",
    top: "160%",
    right: "5%",
},'sameTime')

tl.to("#leaf1",{
    top: "110%",
    left: "80%",
    rotate: "320deg"
},'sameTime')

tl.to("#leaf",{
    top: "110%",
    left: "0%",
    rotate: "280deg"
},'sameTime')



var tl2= gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 98%",
    end: "50% 50%",
    scrub: true,
    markers: true,
}})


tl2.from("#lemon",{
    opacity: "0",
    rotate: "-90deg",
    duration: ".5",
    left: "-50%",
    top:"10%"
},'sameTime')

tl2.from("#CocaCola",{
    opacity: "0",
    rotate: "40deg",
    duration: ".5",
    right: "-50%",
    top:"-%"
},'sameTime')

tl2.from("#Sprite",{
    opacity: "0",
    rotate: "40deg",
    duration: ".5",
    right: "-50%",
    top:"-%"
},'sameTime')