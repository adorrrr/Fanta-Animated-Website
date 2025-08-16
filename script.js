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
    // markers: true,
}})


tl2.from("#lemon",{
    opacity: "0",
    rotate: "-90deg",
    left: "-50%",
    top:"10%"
},'ca')

tl2.from("#CocaCola",{
    opacity: "0",
    rotate: "40deg",
    right: "-50%",

},'ca')

tl2.from("#Sprite",{
    opacity: "0",
    rotate: "40deg",
    right: "-50%",
},'ca')


tl2.to("#orangeSlice",{
    width: "25%",
    left: "37.5%",
    top:"203%",
},'ca')

tl2.to("#fanta",{
    width: "37%",
    top:"211.5%",
    left: "31.5%",

},'ca')